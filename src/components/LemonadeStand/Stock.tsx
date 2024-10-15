'use client';

import React, { useEffect, useState } from 'react';

import { LuCupSoda } from 'react-icons/lu';
import { LiaLemonSolid } from 'react-icons/lia';
import { GiSugarCane } from 'react-icons/gi';
import { GiIceCube } from 'react-icons/gi';
import PurchaseModal from './PurchaseModal';


const Stock = (props: any) => {
	//get from local storage
	let cups = localStorage.getItem('cups');
	if (cups != null) {
		cups = JSON.parse(cups);
	}

	let lemons = localStorage.getItem('lemons');
	if (lemons != null) {
		lemons = JSON.parse(lemons);
	}

	let sugar = localStorage.getItem('sugar');
	if (sugar != null) {
		sugar = JSON.parse(sugar);
	}

	let ice = localStorage.getItem('ice');
	if (ice != null) {
		ice = JSON.parse(ice);
	}

	// set state for stock items
	const [numberOfCups, setNumberOfCups] = useState(cups ? cups : 0);
	const [numberOfLemons, setNumberOfLemons] = useState(lemons ? lemons : 0);
	const [numberOfSugar, setNumberOfSugar] = useState(sugar ? sugar : 0);
	const [numberOfIce, setNumberOfIce] = useState(ice ? ice : 0);

	//move cup count to local Storage
	useEffect(() => {
		localStorage.setItem('cups', JSON.stringify(numberOfCups));
	}, [numberOfCups]);

	//move lemons count to local Storage
	useEffect(() => {
		localStorage.setItem('lemons', JSON.stringify(numberOfLemons));
	}, [numberOfLemons]);

	//move sugar count to local Storage
	useEffect(() => {
		localStorage.setItem('sugar', JSON.stringify(numberOfSugar));
	}, [numberOfSugar]);

	//move ice count to local Storage
	useEffect(() => {
		localStorage.setItem('ice', JSON.stringify(numberOfIce));
	}, [numberOfIce]);

	return (
		<main className="w-1/3 md:border-2 border-border rounded-2xl md:shadow-xl p-1 md:p-4">
			<div className="flex pb-2 justify-center md:justify-start">
				<h2 className="text-2xl md:text-4xl">Stock</h2>
			</div>
			{/* supplies list */}
			<div className="flex flex-col md:flex-row md:justify-between gap-4">
				{/* ordering cups */}
				<div className="flex flex-col gap-2 text-center text-xl">
					<div>Cups</div>
					<div className="flex justify-center align-baseline">
						{numberOfCups} <LuCupSoda className="text-2xl" />
					</div>
				</div>
				{/* ordering lemons */}
				<div className="flex flex-col gap-2 text-center text-xl">
					<div>Lemons</div>
					<div className="flex justify-center align-baseline">
						{numberOfLemons} <LiaLemonSolid className="text-3xl" />
					</div>
				</div>
				{/* ordering sugar */}
				<div className="flex flex-col gap-2 text-center text-xl">
					<div>Sugar</div>
					<div className="flex justify-center align-baseline">
						{numberOfSugar} <GiSugarCane className="text-2xl ml-1" />
					</div>
				</div>
				{/* ordering sugar */}
				<div className="flex flex-col gap-2 text-center text-xl">
					<div>Ice</div>
					<div className="flex justify-center align-baseline">
						{numberOfIce} <GiIceCube className="text-2xl ml-2" />
					</div>
				</div>
			</div>
			<div className="w-full">
				<PurchaseModal
					availableFunds={props.availableFunds}
					setAvaialbleFunds={props.setAvailableFunds}
					numberOfIce={numberOfIce}
					setNumberOfIce={setNumberOfIce}
					numberOfSugar={numberOfSugar}
					setNumberOfSugar={setNumberOfSugar}
					numberOfCups={numberOfCups}
					setNumberOfCups={setNumberOfCups}
					numberOfLemons={numberOfLemons}
					setNumberOfLemons={setNumberOfLemons}
				/>
			</div>
		</main>
	);
};

export default Stock;
