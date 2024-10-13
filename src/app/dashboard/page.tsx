import { getServerSession } from 'next-auth';

import prisma from '../../lib/prisma';
import { authOptions } from '@/lib/auth';

export default async function Dashboard() {
	const session = await getServerSession(authOptions);
	const userName = session?.user?.name;
	const email = session?.user?.email;
  let quizAvg = 0;
  

	const results = await prisma.quizResult.findUnique({
		include: {
			user: true,
		},
		where: {
			userEmail: email as string,
		},
  });
  
  let totalQuestions:number = (Number(results?.correctAnswers) + Number(results?.wrongAnswers))
  let percentCorrect: number = totalQuestions / (Number(results?.correctAnswers));

	const findAvg = () => {
		const count:number | undefined = results?.quizCount;
		const total = results?.quizScore;
    let potentialTotal = 100 * Number(count);
    
		return (quizAvg = Math.trunc((Number(total) / potentialTotal) * 100));
	};

	findAvg();
	return (
		<main className="h-screen">
			<h1 className="text-4xl text-center">Welcome to your Dashboard!</h1>
			<div className="flex">
				<div>
					<h2 className="text-2xl italic  p-4">Hello {userName},</h2>
				</div>
			</div>

			<div>
				<h4 className="text-center text-4xl pb-6">Trivia Rollup Results</h4>
			</div>

			<div className="w-1/3 mx-auto bg-accent p-6 border-border rounded-2xl shadow-2xl">
				<div className="flex justify-between text-xl py-1">
					<div>Quiz Total Score</div>
					<div>{results?.quizScore}</div>
				</div>
				<div className="flex justify-between text-xl py-1">
					<div>Quiz Count</div>
					<div>{results?.quizCount}</div>
				</div>
				<div className="flex justify-between text-xl py-1">
					<div>Average Quiz Score</div>
					<div>{quizAvg}</div>
				</div>
				<div className="flex justify-between text-xl py-1">
					<div>Correct Answers</div>
					<div>{results?.correctAnswers}</div>
				</div>
				<div className="flex justify-between text-xl py-1">
					<div>Wrong Answers</div>
					<div>{results?.wrongAnswers}</div>
				</div>
				<div className="flex justify-between text-xl py-1">
					<div>Questions Not Answered</div>
					<div>{results?.missedAnswers}</div>
				</div>
				<div className="flex justify-between text-xl py-1">
					<div>Total Questions</div>
					<div>{totalQuestions}</div>
				</div>
				<div className="flex justify-between text-xl py-1">
					<div>Percentage of Correct Answers</div>
					<div>{percentCorrect} %</div>
				</div>
			</div>
		</main>
	);
}
