'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { RxLapTimer } from 'react-icons/rx';
import { FaRegRectangleXmark } from 'react-icons/fa6';
import { ImCheckmark2 } from 'react-icons/im';
import { LiaQuestionSolid } from 'react-icons/lia';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Button, buttonVariants } from '../ui/button';
import { ClipboardCheck, LogOut } from 'lucide-react';
import { Progress } from '../ui/progress';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';


interface QuizProps {
	triviaTitle: string
	questions: {
		questionTitle: string;
		answers: {
			description: string;
			isCorrect: boolean;
		}[];
	}[];
}

const Trivia = ({ questions, triviaTitle }: QuizProps) => {
	const { toast } = useToast();
	// get signed in usser email
	const { data: session, status } = useSession();
	const email = session?.user?.email;
	const router = useRouter();

	//set states
	const [activeQuestion, setActiveQuestion] = useState(0);
	const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
		null
	);
	const [selectedAnswer, setSelectedAnswer] = useState<boolean>(false);
	const [checked, setChecked] = useState(false);
	const [results, setResults] = useState({
		score: 0,
		correctAnswers: 0,
		wrongAnswers: 0,
		missedAnswers: 0,
	});
	const [showResults, setShowResults] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(25);
	const [timerRunning, setTimerRunning] = useState(false);
	const [key, setKey] = useState(0);
	const [done, setDone] = useState(false);

	//see which answer user selected
	const onSelectedAnswer = (answers: any, idx: number) => {
		setChecked(true);
		setSelectedAnswerIndex(idx);
		answers.isCorrect === true
			? setSelectedAnswer(true)
			: setSelectedAnswer(false);
	};
	//next question
	const nextQuestion = () => {
		setSelectedAnswerIndex(null);
		setResults((prev) =>
			selectedAnswer
				? {
						...prev,
						score: prev.score + 10,
						correctAnswers: prev.correctAnswers + 1,
				  }
				: {
						...prev,
						wrongAnswers: prev.wrongAnswers + 1,
				  }
		);

		if (activeQuestion !== questions.length - 1) {
			setActiveQuestion((prev) => prev + 1);
			setKey((prevKey) => prevKey + 1);
			stopTimer();
			resetTimer();
			startTimer();
		} else {
			stopTimer();
			setShowResults(true);
			setActiveQuestion(0);
			setDone(true);
			stopTimer();
		}

		setChecked(false);
	};

	//send to api
	useEffect(() => {
		if (done === true) {
			let data = {
				email,
				quizScore: results.score,
				correctAnswers: results.correctAnswers,
				wrongAnswers: results.wrongAnswers,
				missedAnswers: results.missedAnswers,
			};

			fetch('/api/quiz', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Could not save results');
					}
					return response.json();
				})
				.then((data) => {
					console.log('Quiz results saved successfully:', data);
					toast({
						title: 'Success',
						description: (
							<div className="flex items-center">
								🥳
								<p className="text-lg ml-2">Trivia sucessfully Completed!</p>
							</div>
						),
						variant: 'default',
					});
					
				})
				.catch((error) => {
					console.error('Error saving quiz results:', error);
					
				});
		}
	}, [done]);

	//message for score
	const showMessage = (value: number) => {
		if (value === 100) {
			return 'Perfect Score! Well Done. 💯';
		} else if (value >= 85) {
			return 'Nice job, you really know your stuff!  🧠';
		} else if (value >= 75) {
			return 'Ok not bad, but you need to study more! 👌';
		} else if (value >= 65) {
			return 'You should really take this quiz again 🫣';
		} else {
			return 'Houston, we have a problem 💥';
		}
	};
	//create timmer
	useEffect(() => {
		let timer: NodeJS.Timeout;
		if (timerRunning && timeRemaining > 0) {
			timer = setTimeout(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);
		} else if (timeRemaining === 0) {
			handleTimeUp();
		}
		return () => clearTimeout(timer);
	}, [timerRunning, timeRemaining]);

	const startTimer = () => {
		setTimerRunning(true);
	};

	const stopTimer = () => {
		setTimerRunning(false);
	};

	const resetTimer = () => {
		setTimeRemaining(25);
	};

	const handleTimeUp = () => {
		stopTimer();
		resetTimer();
		//@ts-expect-error
		setResults((prev) =>
			//@ts-expect-error
			handleTimeUp
				? {
						...prev,
						missedAnswers: prev.missedAnswers + 1,
				  }
				: {}
		);
		nextQuestion();
		startTimer();
	};

	//circle timer text
	const renderTime = ({}) => {
		if (timeRemaining === 1) {
			return <div className="text-red-600">Too late...</div>;
		} else if (timeRemaining <= 9) {
			return (
				<div className="timer">
					<div className="text-yellow-400 text-center">Hurry Up!</div>
					<div className="value text-yellow-400 text-center">
						{timeRemaining}
					</div>
					<div className="text-yellow-400 text-center">Seconds</div>
				</div>
			);
		} else if (timeRemaining <= 15) {
			return (
				<div className="timer">
					<div className="text-green-500 text-center">Tick toc</div>
					<div className="value text-green-500 text-center">
						{timeRemaining}
					</div>
					<div className="text-green-500 text-center">Seconds</div>
				</div>
			);
		}
		return (
			<div className="timer">
				<div className="text-blue-600 text-center">Remaining</div>
				<div className="value text-blue-600 text-center">{timeRemaining}</div>
				<div className="text-blue-600 text-center">Seconds</div>
			</div>
		);
	};

	// for time remaining
	useEffect(() => {
		startTimer();

		return () => {
			stopTimer();
		};
	}, []);

	return (
		<main className="max-w-[1500px] mx-auto w-full h-screen">
			<div className="">
				{!showResults ? (
					<div className="grid p-2 mb-10">
						<div className="flex justify-between">
							<div className="text-left">
								<h1 className="text-lg md:text-5xl">{triviaTitle} Trivia</h1>
							</div>
							{/* countdown timmer */}
							<div className="timer-wrapper place-items-end mb-4 p-1">
								<CountdownCircleTimer
									key={key}
									isPlaying
									size={120}
									strokeWidth={4}
									isSmoothColorTransition
									duration={25}
									colors={[
										'#2563EB',
										'#22C55E',
										'#FDE047',
										'#DC2626',
										'#DC2626',
									]}
									colorsTime={[18, 13, 9, 1, 0]}
									onComplete={() => {
										// do your stuff here
										return { shouldRepeat: true, delay: 0 }; // repeat animation in 1.5 seconds
									}}
								>
									{renderTime}
								</CountdownCircleTimer>
							</div>
						</div>
						<div className="grid auto-cols-auto mx-auto">
							<h2 className="text-xl md:text-3xl text-center mb-4">
								{questions[activeQuestion].questionTitle}
							</h2>
						</div>
						{/* show answers */}
						<div className="flex flex-col">
							<div>
								<div className="flex flex-col gap-2 mx-auto w-full mb-4">
									{questions[activeQuestion].answers.map((answer, idx) => (
										<Button
											key={idx}
											variant={'outline'}
											onClick={() => onSelectedAnswer(answer, idx)}
											className={selectedAnswerIndex === idx ? 'bg-accent' : ''}
										>
											{answer.description}
										</Button>
									))}
								</div>
								{/* show next/finsh and exit buton */}
								<div className="">
									<Button
										onClick={() => router.push('/trivia')}
										variant={'destructive'}
										className="w-1/2 mx-auto"
									>
										{/* <LogOut className="mr-2" /> */}
										Exit
									</Button>

									<Button
										onClick={nextQuestion}
										disabled={!checked}
										className="w-1/2 mx-auto uppercase"
									>
										{activeQuestion === questions.length - 1
											? 'Finish'
											: 'Next'}
									</Button>
								</div>
							</div>
							{/* show progress */}
							<div className="pt-6">
								<Progress
									value={((activeQuestion + 1) / questions.length) * 100}
								/>
							</div>
						</div>
					</div>
				) : (
					<div className="p-4">
						<h3 className="text-5xl pb-5 text-center uppercase text-blue-500 underline">
							Results
						</h3>
						<div className="flex flex-col items-center text-primary text-3xl">
							<h4 className="p-2">
								Overall{' '}
								{Math.trunc((results.score / (questions.length * 10)) * 100)}%
							</h4>
							<h4 className="p-2">
								Total Score: <span>{results.score}</span>
							</h4>
						</div>
						<div className="w-1/2 mx-auto border-border border-2 p-7 rounded-2xl shadow-2xl">
							<h3 className="text-3xl text-center">Stats</h3>
							<div className="flex justify-between p-1">
								<div>Total Questions</div>
								<div className="flex items-center">
									{questions.length}{' '}
									<LiaQuestionSolid className="text-2xl ml-4" />
								</div>
							</div>
							<div className="flex justify-between p-1">
								<div>Correct Answers</div>
								<div className="flex items-center">
									{results.correctAnswers}{' '}
									<ImCheckmark2 className="text-2xl ml-4" />
								</div>
							</div>
							<div className="flex justify-between p-1">
								<div>Wrong Answers</div>
								<div className="flex items-center">
									{results.wrongAnswers}
									<FaRegRectangleXmark className="text-2xl ml-4" />
								</div>
							</div>
							<div className="flex justify-between p-1">
								<div>Unanswered Questions</div>
								<div className="flex items-center">
									{results.missedAnswers}
									<RxLapTimer className="text-2xl ml-4" />
								</div>
							</div>
						</div>

						<h4 className="text-3xl text-red-600 text-center mt-5 mb-5">
							{showMessage(
								Math.floor((results.score / (questions.length * 10)) * 100)
							)}
						</h4>
						<div className="flex justify-center mb-20">
							<Button
								onClick={() => window.location.reload()}
								variant={'outline'}
								className=""
							>
								Restart Quiz
							</Button>
						</div>
						<div className="pt-10">
							<p className="text-sm">
								Note: Trivia scores are only logged for users who have signed in.
							</p>
							<Link
								href="/login"
								className={buttonVariants({ variant: 'outline' })}
							>
								Login
							</Link>
						</div>
					</div>
				)}
			</div>
		</main>
	);
};
export default Trivia;
