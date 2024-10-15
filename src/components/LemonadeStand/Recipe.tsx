'use client';

import React, { useEffect, useState } from 'react';
import { LuMinusCircle } from 'react-icons/lu';
import { LuPlusCircle } from 'react-icons/lu';
import { Button } from '../ui/button';

const Recipe = (props: any) => {
	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	let price = localStorage.getItem('price');
	if (price != null) {
		price = JSON.parse(price);
	}

	let lemonsInPitcher = localStorage.getItem('lemonsInPitcher');
	if (lemonsInPitcher != null) {
		lemonsInPitcher = JSON.parse(lemonsInPitcher);
	}

	let sugarInPitcher = localStorage.getItem('sugarInPitcher');
	if (sugarInPitcher != null) {
		sugarInPitcher = JSON.parse(sugarInPitcher);
	}

	let iceInCup = localStorage.getItem('iceInCup');
	if (iceInCup != null) {
		iceInCup = JSON.parse(iceInCup);
	}

	const [pricePerCup, setPricePerCup] = useState(price ? price : 0.25);
	const [lemonsPerPitcher, setLemonsPerPitcher] = useState(
		lemonsInPitcher ? lemonsInPitcher : 5
	);
	const [sugarPerPitcher, setSugarPerPitcher] = useState(
		sugarInPitcher ? sugarInPitcher : 5
	);
	const [icePerCup, setIcePerCup] = useState(iceInCup ? iceInCup : 6);

	//move price per cup count to local Storage
	useEffect(() => {
		localStorage.setItem('price', JSON.stringify(pricePerCup));
	}, [pricePerCup]);

	//move lemons per pitcher count to local Storage
	useEffect(() => {
		localStorage.setItem('lemonsInPitcher', JSON.stringify(lemonsPerPitcher));
	}, [lemonsPerPitcher]);

	//move sugar per pitcher count to local Storage
	useEffect(() => {
		localStorage.setItem('sugarInPitcher', JSON.stringify(sugarPerPitcher));
	}, [sugarPerPitcher]);

	//move ice per cup count to local Storage
	useEffect(() => {
		localStorage.setItem('iceInCup', JSON.stringify(icePerCup));
	}, [icePerCup]);

	function incrementPricePerCup() {
		setPricePerCup(Number(pricePerCup) + 0.25);
	}
	function decrementPricePerCup() {
		if (Number(pricePerCup) > 0) {
			setPricePerCup(Number(pricePerCup) - 0.25);
		}
	}
	function incrementLemonsPerPitcher() {
		setLemonsPerPitcher(Number(lemonsPerPitcher) + 1);
	}
	function decrementLemonsPerPitcher() {
		if (Number(lemonsPerPitcher) > 0) {
			setLemonsPerPitcher(Number(lemonsPerPitcher) - 1);
		}
	}
	function incrementSugarPerPitcher() {
		setSugarPerPitcher(Number(sugarPerPitcher) + 1);
	}
	function decrementSugarPerPitcher() {
		if (Number(sugarPerPitcher) > 0) {
			setSugarPerPitcher(Number(sugarPerPitcher) - 1);
		}
	}
	function incrementIcePerCup() {
		setIcePerCup(Number(icePerCup) + 1);
	}
	function decrementIcePerCup() {
		if (Number(icePerCup) > 0) {
			setIcePerCup(Number(icePerCup) - 1);
		}
	}

	let currencyVAR = '';
	if (Number(pricePerCup) < 0.99) {
		currencyVAR = 'Cents';
	} else if (Number(pricePerCup) >= 1.0 && Number(pricePerCup) <= 1.99) {
		currencyVAR = 'Dollar';
	} else {
		currencyVAR = 'Dollars';
	}

	return (
		<main className="w-1/3 md:border-2 border-border rounded-2xl md:shadow-xl p-1 md:p-4">
			<div className="flex pb-2 justify-center md:justify-start">
				<h3 className="text-2xl md:text-4xl">Recipe</h3>
			</div>

			{/* price per cup selection */}
			<div className="flex flex-col md:flex-row md:justify-between p-2 text-md items-center">
				{/* price per cup label*/}
				<div className="text-center md:text-left">
					{' '}
					<p>Price Per Cup:</p>
				</div>
				{/* price var */}
				<div className="text-center flex items-center">
					<Button
						className="text-xl"
						variant={'ghost'}
						onClick={decrementPricePerCup}
					>
						<LuMinusCircle />
					</Button>{' '}
					{USDollar.format(Number(pricePerCup))} {currencyVAR}
					<Button
						className="text-xl"
						variant={'ghost'}
						onClick={incrementPricePerCup}
					>
						<LuPlusCircle />
					</Button>
				</div>
			</div>
			{/* lemons per pitcher selection */}
			<div className="p-0">
				<div className="flex flex-col md:flex-row md:justify-between p-2 text-md items-center">
					{/* lemons per pitcher label*/}
					<div className="text-center md:text-left">
						{' '}
						<p>Lemons Per Pitcher:</p>
					</div>
					{/* lemons var */}
					<div className="text-center flex items-center">
						<Button
							className="text-xl"
							variant={'ghost'}
							onClick={decrementPricePerCup}
						>
							<LuMinusCircle />
						</Button>{' '}
						{lemonsPerPitcher} Lemons{' '}
						<Button
							className="text-xl"
							variant={'ghost'}
							onClick={incrementPricePerCup}
						>
							<LuPlusCircle />
						</Button>
					</div>
				</div>
			</div>
			{/* sugar per pitcher selection */}
			<div>
				<div className="flex flex-col md:flex-row md:justify-between p-2 text-md items-center">
					{/* sugar per pitcher label*/}
					<div className="text-center md:text-left">
						{' '}
						<p>Sugar Per Pitcher:</p>
					</div>
					{/* sugar var */}
					<div className="text-center flex items-center">
						<Button
							className="text-xl"
							variant={'ghost'}
							onClick={decrementPricePerCup}
						>
							<LuMinusCircle />
						</Button>{' '}
						{sugarPerPitcher} Cups{' '}
						<Button
							className="text-xl"
							variant={'ghost'}
							onClick={incrementPricePerCup}
						>
							<LuPlusCircle />
						</Button>
					</div>
				</div>
			</div>
			{/* ice per cup selection */}
			<div>
				<div className="flex flex-col md:flex-row md:justify-between p-2 text-md items-center">
					{/* ice label*/}
					<div className="text-center md:text-left">
						{' '}
						<p>Ice Cubes Per Cup:</p>
					</div>
					{/* sugar var */}
					<div className="text-center flex items-center">
						<Button
							className="text-xl"
							variant={'ghost'}
							onClick={decrementPricePerCup}
						>
							<LuMinusCircle />
						</Button>{' '}
						{icePerCup} Cubes{' '}
						<Button
							className="text-xl"
							variant={'ghost'}
							onClick={incrementPricePerCup}
						>
							<LuPlusCircle />
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Recipe;
