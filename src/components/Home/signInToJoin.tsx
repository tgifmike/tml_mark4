import { cn } from '@/lib/utils';

import React from 'react'
import { buttonVariants } from '../ui/button';
import Link from 'next/link';
import { LiaBlogSolid } from 'react-icons/lia';
import { MdOutlineQuiz } from 'react-icons/md';

const signInToJoin = () => {
  return (
		<main className="m-4">
			<div className="p-4 border-border border-2 rounded-2xl shadow-2xl bg-accent">
				<div className="flex flex-col justify-center items-center py-2">
					<p className="text-4xl font-bold font-mono">Sign in</p>
					<p className="text-2xl font-medium">
						Signing in gives you access to:
					</p>
					<p className="text-xl italic text-chart-5 flex items-center py-2">
						Comment on Blogs <LiaBlogSolid className="ml-4" />
					</p>
					<p className="text-xl italic text-chart-5 flex items-center py-2">
						Like Blogs <LiaBlogSolid className="ml-4" />
					</p>
					<p className="text-xl italic text-chart-5 flex items-center py-2">
						Save Trivia Scores <MdOutlineQuiz className="ml-4" />
					</p>
				</div>
				<div className="flex items-center justify-center py-6">
					<Link
						className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
						href="/login"
					>
						Sign In
					</Link>
				</div>
			</div>
		</main>
	);
}

export default signInToJoin