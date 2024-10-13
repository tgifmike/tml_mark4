import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { email, quizScore, correctAnswers, wrongAnswers, missedAnswers } =
			await req.json();

		const result = await prisma.quizResult.upsert({
			where: {
				userEmail: email,
			},
			update: {
				quizCount: { increment: 1 },
				quizScore: { increment: quizScore },
				correctAnswers: { increment: correctAnswers },
				wrongAnswers: { increment: wrongAnswers },
				missedAnswers: { increment: missedAnswers },
			},
			create: {
				userEmail: email,
				quizCount: 1,
				quizScore: quizScore,
				correctAnswers: correctAnswers,
				wrongAnswers: wrongAnswers,
				missedAnswers: missedAnswers,
			},
		});
		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({
			message: 'Could not record quiz results.',
			error,
		});
	}
}
