import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Games = () => {
  return (
		<main>
			<div className="py-4">
				<h1 className="text-4xl text-center">Everyone Loves Games!!</h1>
			</div>
			<div className="flex flex-col-reverse md:flex-row">
				<div></div>
				<div className="p-4">
					<Image
						src="https://images.unsplash.com/photo-1663787591774-c1829054084c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGdhbWVzfGVufDB8fDB8fHww"
						alt="Image of balls and question mark dice"
						width={500}
						height={250}
						className="object-cover rounded-2xl shadow-2xl "
					/>
				</div>
				<div className="p-4">
					<div className="p-6">
						<p className="text-xl italic font-mono font-medium">
							We have Trivia Games to test your knowlege and entertain you. We
							have a wide range of categories.
						</p>
						<Link
							className={buttonVariants({ variant: 'outline' })}
							href={'/trivia'}
						>
							Trivia
						</Link>
					</div>
					<div className="p-6">
						<p className="text-xl italic font-mono font-medium">
							We also have a lemonade stand game. How well can you run a small
							business?
						</p>
						<Link
							className={buttonVariants({ variant: 'outline' })}
							href={'/lemonade-stand'}
						>
							Lemonade Stand
						</Link>
					</div>
					<div className="p-6 md:flex md:justify-end">
						<p className='text-xl italic font-mono md:text-right'>
							If you have any questions or comments on the games please let us
							know.
						</p>
						<Link
							className={cn(buttonVariants({ variant: 'default' }), 'ml-2')}
							href={'/contact'}
						>
							Questions/Comments
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Games