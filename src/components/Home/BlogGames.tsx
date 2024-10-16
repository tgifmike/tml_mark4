import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

const BlogGames = () => {
  return (
		<main className=''>
			<div className="flex flex-col md:flex-row gap-1 md:gap-2 mx-auto m-1 md:m-2">
				<div className="relative">
					<Image
						src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="image of blog made of scrable tiles"
						width={750}
						height={600}
						className="fill"
					/>
					<p className="text-md absolute left-4 bottom-20 text-background">
						Blogs with a wide range of topics!{' '}
					</p>
					<Link
						className={cn(
							buttonVariants({ variant: 'outline' }),
							'rounded-full absolute bottom-8 left-20'
						)}
						href="/blog-home"
					>
						See our Blogs
					</Link>
				</div>
				<div className="relative">
					<Image
						src="https://images.pexels.com/photos/5477776/pexels-photo-5477776.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="image of chess pieces"
						width={750}
						height={600}
						className="fill"
					/>
					<p className="text-md absolute right-4 top-24 text-background">
						We have Trivia to test your knowledge{' '}
					</p>
					<p className="text-md absolute right-4 top-28 text-background">
						and a lemonde stand game {' '}
					</p>
					<p className="text-md absolute right-4 top-32 text-background">
						to test your entrepreneurial spirit.{' '}
					</p>
					<Link
						className={cn(
							buttonVariants({ variant: 'outline' }),
							'rounded-full absolute top-40 right-6'
						)}
						href="/games"
					>
						Check out our Games
					</Link>
				</div>
				
			</div>
		</main>
	);
}

export default BlogGames;