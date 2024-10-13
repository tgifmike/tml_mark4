import { PrismaClient } from '@prisma/client';
import prismaRandom from 'prisma-extension-random';

const prisma = new PrismaClient().$extends(prismaRandom());

export async function getTriviaQuestions(cat: string) {
	const questions = await prisma.quizQuestion.findManyRandom(10, {
		select: {
			//@ts-expect-error
			questionTitle: {},
			answers: {
				select: {
					description: true,
					isCorrect: true,
				},
			},
			categories: {
				include: {
					quizCategory: {
						select: {
							name: true,
						},
					},
				},
			},
		},
		where: {
			categories: {
				some: {
					quizCategory: {
						name: cat,
					},
				},
			},
		},
	});

	return questions;
}

export async function getMixMatchQuestions() {
	const questions = await prisma.quizQuestion.findManyRandom(10, {
		select: {
			//@ts-expect-error
			questionTitle: {},
			answers: {
				select: {
					description: true,
					isCorrect: true,
				},
			},
		},
	});

	return questions;
}
