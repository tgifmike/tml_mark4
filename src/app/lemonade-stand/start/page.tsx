'use client';






import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import lemonJumpingRope from '@/public/lemonade/lemonJumpingRope.json';
import { useRef } from 'react';

import Bank from '@/components/LemonadeStand/Bank';
import Weather from '@/components/LemonadeStand/Weather';
import GameFunctions from '@/components/LemonadeStand/GameFunctions';
import Recipe from '@/components/LemonadeStand/Recipe';
import Stock from '@/components/LemonadeStand/Stock';
import ShowResults from '@/components/LemonadeStand/ShowResults';

const Play = () => {
	const [showResults, setShowResults] = useState(false);
	const lemonRef = useRef<LottieRefCurrentProps>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, [setLoading]);

	//get avaialable funds form local storage
	let funds = localStorage.getItem('funds');
	if (funds != null) {
		funds = JSON.parse(funds);
	}

	//set state for available funds
	const [availableFunds, setAvailableFunds] = useState(funds ? funds : 50);

	//move availablefunds to local storage
	useEffect(() => {
		localStorage.setItem('funds', JSON.stringify(availableFunds));
	}, [availableFunds]);

	//find temp
	const [temp, setTemp] = useState(0);
	useEffect(() => {
		const tempArray = [105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50];
		const temperature: any =
			tempArray[Math.floor(Math.random() * tempArray.length)];
		//localStorage.setItem('todaysTempLS', temperature);
		setTemp(temperature);
	}, [temp]);

	//find conditons
	const [condition, setCondition] = useState('');
	useEffect(() => {
		const conditionArray = [
			'Sunny',
			'Partly Cloudy',
			'Cloudy',
			'Windy',
			'Raining',
		];
		const todaysCondition: any =
			conditionArray[Math.floor(Math.random() * conditionArray.length)];
		setCondition(todaysCondition);
	}, [condition]);

	return (
		<main className="mx-auto  md:w-full">
			{loading ? (
				<div className="h-screen flex justify-start align-top items-start mx-auto">
					<div className=" bg-slate-100">
						<Lottie lottieRef={lemonRef} animationData={lemonJumpingRope} />
					</div>
				</div>
			) : (
				<div className="h-full w-full">
					<h1 className="text-4xl md:text-8xl text-yellow-300 pb-4 italic font-spicy_rice text-center">
						Lemonade Stand
					</h1>
					{!showResults ? (
						<div className="max-w-[1500px] mx-auto">
							<div className="flex gap-2 p-2">
								<Bank availableFunds={availableFunds} />
								<Stock
									availableFunds={availableFunds}
									setAvailableFunds={setAvailableFunds}
								/>
								<Recipe />
							</div>
							<div className="flex justify-between md:gap-2 md:p-2 ">
								<GameFunctions temp={temp} setShowResults={setShowResults} />

								<Image
									src="https://t3.ftcdn.net/jpg/01/06/83/98/240_F_106839822_04HqeFo67JvSBSGr6aGd7Ckn0xtEdSuT.webp"
									alt="image of lemonade stand"
									width={410}
									height={120}
									className="object-cover rounded-2xl w-0 md:w-1/3"
								/>
								<Weather temp={temp} condition={condition} />
							</div>
						</div>
					) : (
						<div>
							<ShowResults />
						</div>
					)}
				</div>
			)}
		</main>
	);
};

export default Play;
