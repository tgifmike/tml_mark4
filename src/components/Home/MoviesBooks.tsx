import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

const MoviesBooks = () => {
	return (
		<main>
			<div className="flex flex-col md:flex-row gap-1 md:gap-2 mx-auto m-1 md:m-2">
				<div className="relative">
					<Image
						src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=600"
						alt="image of chess pieces"
						width={750}
						height={600}
						className="fill"
					/>
					<p className="text-md absolute right-4 top-10 text-background">
						Amazing Movies you should not miss!{' '}
					</p>
					<Link
						className={cn(
							buttonVariants({ variant: 'outline' }),
							'rounded-full absolute top-20 right-6'
						)}
						href="/great-flicks"
					>
						Check out some Great Flicks
					</Link>
				</div>
				<div className="relative">
					<Image
						src="https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="image of books"
						width={750}
						height={600}
						className="fill"
					/>
					<p className="text-md absolute left-4 bottom-32 text-background">
						Some books that have been helpful{' '}
					</p>
					<p className="text-md absolute left-4 bottom-28 text-background">
						and I have learned a lot from.{' '}
					</p>

					<Link
						className={cn(
							buttonVariants({ variant: 'outline' }),
							'rounded-full absolute bottom-16 left-8'
						)}
						href="/good-reads"
					>
						See Our Good Read List
					</Link>
				</div>
				{/* <div>
					<Image
						src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=600"
						alt="image of popcorn"
						width={450}
						height={450}
						className="object-cover"
					/>
				</div>
				<div>
					<Image
						src="https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="image of books"
						width={450}
						height={450}
						className="object-cover"
					/>
				</div> */}
			</div>
		</main>
	);
};

export default MoviesBooks;
