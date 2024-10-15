import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LemonadeHome = () => {
	return (
		<main className="flex flex-col mx-auto h-full w-full p-2">
			<h1 className="text-2xl md:text-4xl text-yellow-300 pb-4 italic font-mono">
				Lemonade Stand
			</h1>
			<div className="flex flex-col-reverse md:flex-row">
				<div className="w-screen md:w-3/5 flex flex-col">
					<h4 className="text-xl md:text-4xl">Rules</h4>
					<div className="text-sm md:text-lg opacity-75 p-2 text-left">
						<ul className="list-disc px-4">
							<li className="p-1">
								The object of the game is accumulate the most total profit while
								not going bankrupt!
							</li>
							<li className="p-1">
								You Start with $50 but when you have insufient funds to procure
								more supplies you are bankrupt.
							</li>
							<li className="p-1">
								To have a sale you have to buy enough supplies to make at lest 1
								pitcher of lemonade, and you will need enough cups and ice.
							</li>
							<li className="p-1">
								Each time you play the game will be a sales cycle of 1 day.
								Before you start a cylce remember to replenish your supplies!
							</li>
							<li className="p-1">
								Temperature and Weather will play a role as well. Hot and Sunny
								days you will get more potential sale, conversly Cold and Rainy
								days will see diminished potential sales.
							</li>
							<li className="p-1">
								You can also effect sales and profit by tweeking the Recipe. The
								price of the cup, the lemons and sugar in each pitcher and
								number of ice cubes in each cup can make a change in your
								potential customers. For example if your selling lemonade that
								is too sweet or not sweet enough you will see a fall in
								potential customers.
							</li>
						</ul>
					</div>
				</div>
				<div className="w-screen md:w-2/5 flex justify-center">
					<div className="flex flex-col gap-2 md:gap-4">
						<Image
							src="https://t3.ftcdn.net/jpg/01/06/83/98/240_F_106839822_04HqeFo67JvSBSGr6aGd7Ckn0xtEdSuT.webp"
							alt="image of lemonade stand"
							width={410}
							height={120}
							className="object-cover rounded-2xl max-w-lg"
						/>
						<Link
							className={cn(buttonVariants({ size: 'lg' }), 'justify-center items-center')}
							href={'/lemonade-stand/start'}
						>
							Start The Game
						</Link>
					</div>
				</div>
			</div>
			<div className="">
				<p className="pl-10 text-2xl text-red-600">Good Luck!!</p>
			</div>
		</main>
	);
};

export default LemonadeHome;
