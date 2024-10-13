import Trivia from '@/components/Trivia/Trivia';
import { getTriviaQuestions } from '@/lib/db-quiz-utils';

export default async function CashHandlingTrivia() {
	const questions = await getTriviaQuestions('Restaurant Terms');

	const TriviaTitle = 'Restaurant Terms';

	return (
		<main>
			<Trivia questions={questions} triviaTitle={TriviaTitle} />
		</main>
	);
}
