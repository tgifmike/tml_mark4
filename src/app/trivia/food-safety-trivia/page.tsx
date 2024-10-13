import Trivia from '@/components/Trivia/Trivia';
import { getTriviaQuestions } from '@/lib/db-quiz-utils';

export default async function CashHandlingTrivia() {
	const questions = await getTriviaQuestions('Food Safety');

	const TriviaTitle = 'Food Safety';

	return (
		<main>
			<Trivia questions={questions} triviaTitle={TriviaTitle} />
		</main>
	);
}
