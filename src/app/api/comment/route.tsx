import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
	// const session = await getServerSession(authOptions);
	// const email = session?.user?.email;

	try {
		const { values, postId, userEmail } = await req.json();
		const comment = values.comment
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
