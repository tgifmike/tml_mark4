import Trivia from '@/components/Trivia/Trivia';
import { getTriviaQuestions } from '@/lib/db-quiz-utils';

export default async function CashHandlingTrivia() {
	const questions = await getTriviaQuestions('History of POS');

	const TriviaTitle = 'History of POS';

	return (
		<main>
			<Trivia questions={questions} triviaTitle={TriviaTitle} />
		</main>
	);
}
