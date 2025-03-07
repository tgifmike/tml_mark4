
import { FC } from 'react';
import prisma from '@/lib/prisma';
import { MessageCircleIcon, UserRound } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

import Image from 'next/image';
import { Avatar, AvatarFallback } from '../ui/avatar';


import TimeSince from './TimeSince';

interface CommentsProps {
	postId: string | undefined;
}
const Comments: FC<CommentsProps> = async ({ postId }) => {
	const comments = await prisma.comment.findMany({
		where: {
			postId,
		},
		include: {
			commentAuthor: true,
		},
	});

	return (
		<div className="w-full mx-auto p-2">
			<div className="md:w-3/4 mx-auto">
				<div className="flex justify-center p-2">
					<h2 className="flex gap-2 text-xl items-center justify-center bg-accent w-1/4 p-2 rounded-full">
						{' '}
						{comments.length} <MessageCircleIcon />
					</h2>
				</div>
				<Separator className="" />
				<div className="pt-4">
					{comments?.map((comment) => (
						<div className="flex p-1">
							<div className="flex items-center p-2">
								<Avatar>
									{comment.commentAuthor.image ? (
										<div className="relative aspect-square h-full w-full">
											<Image
												fill
												src={comment.commentAuthor.image}
												alt="Image of user who made comment"
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
								<CardHeader className="p-1">
									<div className="">
										<div className="flex justify-between items-center">
											<div>
												<p className="text-2xl">{comment.commentAuthor.name}</p>
												<p className="pl-4 text-sm italic opacity-75">Said</p>
											</div>
										</div>
									</div>
								</CardHeader>
								<CardContent className="px-12 py-1">
									<p className="text-xl">{comment.comment}</p>
								</CardContent>
								<CardFooter className="flex justify-end p-1">
									<p className="text-sm opacity-75">
										<TimeSince date={comment.createdAt} />
										
									</p>
								</CardFooter>
							</Card>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Comments;
