import Trivia from '@/components/Trivia/Trivia';
import { getMixMatchQuestions } from '@/lib/db-quiz-utils';

export default async function CashHandlingTrivia() {
	const questions = await getMixMatchQuestions();

	const TriviaTitle = 'Mix & Match';

	return (
		<main>
			<Trivia questions={questions} triviaTitle={TriviaTitle} />
		</main>
	);
}
