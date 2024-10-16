import React from 'react';
import { Button } from '../ui/button';



const RulesModal = () => {
	return (
		<main className="">
			<div className="">
				<Button
					className="px-10"
					size={'lg'}
					variant={'default'}
					onClick={() =>
						//@ts-ignore
						document.getElementById('RulesModal').showModal()
					}
				>
					See Rules
				</Button>
			</div>
			<dialog id="RulesModal" className="p-4">
				<div className="">
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
					<div className="modal-action relative p-6 rounded-2xl">
						<form method="dialog">
							

                            <Button
                                variant={'destructive'}
                                className="absolute top-2 right-2">Exit</Button>
						</form>
					</div>
				</div>
			</dialog>
		</main>
	);
};

export default RulesModal;
