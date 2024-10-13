
import { TriviaPicker } from '@/components/Trivia/TriviaPicker'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { FaCrown } from 'react-icons/fa6';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

const Trivia = async () => {
    const session = await getServerSession(authOptions);
  return (
		<main>
			<div>
				<h1 className="text-4xl p-6">Trivia Games</h1>
			</div>
			<div className="flex p-2 ">
				<div className="w-2/3">
					<h3 className="text-xl p-6">
						We have all sorts of triva games to test your knowlege and entertain
						you.
					</h3>
					<p className="text-md p-6">
						We have Trivia from food safety all the way to the history of point
						of sale systems and everything in between. We even have a mix and
						match trivia where you will see a mix of questions from all our
						trivia games!
					</p>

					<div className="flex justify-center">
						<Image
							src={
								'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=600'
							}
							alt="image of questin mark"
							width={500}
							height={500}
							className="max-w-sm md:max-2-lg rounded-2xl shadow-2xl"
						/>
					</div>
				</div>

				<div className="p-4 w-1/3">
					<div className="pb-10">
						<TriviaPicker />
					</div>
					<div className="pt-20">
						<Link
							className={buttonVariants({ variant: 'outline' })}
							href="/trivia/leaderboard"
						>
							<FaCrown className="w-6 h-6 mr-2 text-yellow-500 mb-1" />
							Check out the Leaderboard
						</Link>
					</div>

					<div className="pt-10">
						<p className="text-sm">
							Note: Trivia scores are only logged for users who have signed in.
                      </p>
                      {session?.user ? null : (<Link
							href="/login"
							className={buttonVariants({ variant: 'link' })}
						>
							Sign In
						</Link>)}
						
					</div>
				</div>
			</div>
		</main>
	);
}

export default Trivia



