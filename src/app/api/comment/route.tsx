import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const { values, postId, userEmail } = await req.json();
		const comment = values.comment;
		const newComment = await prisma.comment.create({
			data: {
				postId,
				comment,
				commentAuthorEmail: userEmail as string,
			},
		});

		return NextResponse.json({ newComment }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: `Couldn't submit comment`, error });
	}
}
