'use client';

import { FC, FormEvent, useState } from 'react';
import { GoThumbsup } from 'react-icons/go';

import { useSession } from 'next-auth/react';
import prisma from '../../lib/prisma';
import { useRouter } from 'next/navigation';
import { toast } from '@/hooks/use-toast';
import { CircleX, ThumbsUp } from 'lucide-react';
import { Button, buttonVariants } from '../ui/button';

interface LikeButtonProps {
	likes: any;
	postId: any;
}

const LikeButton: FC<LikeButtonProps> = ({ likes, postId }) => {
	const { data: session, status } = useSession();
	const [likeCount, setlikeCount] = useState<number>(likes._count.Like);
	const [submitted, setSubmitted] = useState(false);
	const router = useRouter();

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const res = await fetch('/api/like', {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
				},
				body: JSON.stringify({
					postId,
				}),
			});

			if (!session) {
				toast({
					title: 'Something Went Wrong',
					description: (
						<div className="flex items-center">
							<CircleX size={40} strokeWidth={1} />
							<p className="text-lg ml-2">Need to Login to Like</p>
						</div>
					),
					variant: 'destructive',
				});
			} else if (submitted === true) {
				toast({
					title: 'Something Went Wrong',
					description: (
						<div className="flex items-center">
							<CircleX size={40} strokeWidth={1} />
							<p className="text-lg ml-2">You have already like it.</p>
						</div>
					),
					variant: 'destructive',
				});
			} else if (res.status === 200) {
				setSubmitted(true);

				toast({
					title: 'Success',
					description: (
						<div className="flex items-center">
							<ThumbsUp size={40} strokeWidth={1} />

							<p className="text-lg ml-2">Like sucessfully saved!</p>
						</div>
					),
					variant: 'default',
				});

				setlikeCount(likeCount + 1);
				window.location.reload;
				router.refresh();
			}
		} catch (err: any) {
			console.error('Err', err);
		}
	};

	return (
		<div className="flex align-middle">
			<form onSubmit={onSubmit}>
				<Button className="text-xl bg-accent" variant={'outline'}>
					<ThumbsUp size={20} strokeWidth={1} className='mr-2' />
					Like's {' '}
					{likeCount}
				</Button>
			</form>
		</div>
	);
};

export default LikeButton;
