import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { buttonVariants } from '@/components/ui/button';
import { getResults } from '@/lib/db-utilites';
import { User2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { FaCrown } from 'react-icons/fa';

export default async function LeaderBoard() {
	
	const results = await getResults();




	return (
		<main className="p-8 flex flex-col">
			<h2 className="text-center font-bold text-2xl capitalize">
				🏆 Leaderboard 🏆
			</h2>
			<ol>
				{results.map((quizResult, idx) => (
					<li
						key={quizResult.id}
						className={`py-4 ${idx < 3 ? 'font-bold' : ''}`}
					>
						<div className="flex items-center gap-5 w-full">
							<div className="flex sm:flex-row flex-col gap-1 justify-between w-full items-center">
								<div className="flex gap-3 items-center">
									<span className="text-2xl">{idx + 1}</span>
									<Avatar>
										<AvatarImage
											//@ts-ignore
											src={quizResult.user.image}
											alt="Image of the user"
											className=""
										/>
										<AvatarFallback>
											<User2Icon />
										</AvatarFallback>
									</Avatar>

									<span className="text-2xl">{quizResult.user.name}</span>
									{idx === 0 && (
										<FaCrown className="inline-block w-6 h-6 text-yellow-500 mb-1" />
									)}
								</div>
								<span className="text-2xl">
									Total Quiz Score: {quizResult.quizScore}
								</span>
							</div>
						</div>
					</li>
				))}
			</ol>
			<div className="pt-52">
				<p className="text-sm">
					Note: Trivia scores are only logged for users who have signed in.
				</p>
				<Link href="/login" className={buttonVariants({ variant: 'link' })}>
					Sign In
				</Link>
			</div>
		</main>
	);
};


