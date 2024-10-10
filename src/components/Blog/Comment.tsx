import { FC } from 'react';
import prisma from '@/lib/prisma';
import { MessageCircleIcon, UserRound } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

import Image from 'next/image';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface CommentsProps {
	postId: string | undefined;
}
const Comment: FC<CommentsProps> = async ({ postId }) => {
	const comments = await prisma.comment.findMany({
		where: {
			postId,
		},
		include: {
			commentAuthor: true,
		},
	});

	return (
		<div className="w-full mx-auto p-4">
			<div className="w-1/2 mx-auto">
				<div className="flex justify-center p-2">
					<h2 className="flex gap-2 text-xl items-center justify-center bg-accent w-1/4 p-2 rounded-full">
						{' '}
						{comments.length} <MessageCircleIcon />
					</h2>
				</div>
				<Separator className="" />
				<div className="pt-4 ">
					{comments?.map((comment) => (
						<div className="flex py-1">
							<div className="flex items-center p-2">
								<Avatar>
									{comment.commentAuthor.image ? (
										<div className="relative aspect-square h-full w-full">
											<Image
												fill
												src={comment.commentAuthor.image}
												alt="Image of user who mde comment"
												referrerPolicy="no-referrer"
												className="h-10 w-10"
											/>
										</div>
									) : (
										<AvatarFallback>
											<span className="sr-only">
												{comment.commentAuthor.name}
											</span>
											<div>
												<UserRound />
											</div>
										</AvatarFallback>
									)}
								</Avatar>
							</div>
							<Card className="w-full">
								<CardHeader>
									<div className="">
										<div className='flex justify-between items-center'>
											<div>
												<p className="text-2xl">{comment.commentAuthor.name}</p>
												<p className="text-sm italic">Says</p>
											</div>
											<div>
												<p className="text-sm">
													{comment.createdAt.toDateString()}
												</p>
											</div>
										</div>
									</div>
								</CardHeader>
								<CardContent className="px-12">
									<p className="text-xl">{comment.comment}</p>
								</CardContent>
								{/* <CardFooter>
									<p className="text-sm">{comment.createdAt.toDateString()}</p>
								</CardFooter> */}
							</Card>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Comment;
