import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const session = await getServerSession(authOptions);
	const email = session?.user?.email;

	try {
		const { postId } = await req.json();
		const newLike = await prisma.like.create({
			data: {
				postId,
				userEmail: email as string,
			},
		});
		return NextResponse.json({ newLike }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: 'Couldn`t Submit Like', error });
	}
}
