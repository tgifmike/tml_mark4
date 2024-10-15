'use client';

import React, { useEffect } from 'react';

const DailyRecap = () => {
	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	let numberOfCups = localStorage.getItem('cups');
	if (numberOfCups != null) {
		numberOfCups = JSON.parse(numberOfCups);
	}
	let numberOfLemons = localStorage.getItem('lemons');
	if (numberOfLemons != null) {
		numberOfLemons = JSON.parse(numberOfLemons);
	}
	let numberOfSugar = localStorage.getItem('sugar');
	if (numberOfSugar != null) {
		numberOfSugar = JSON.parse(numberOfSugar);
	}
	let numberOfIce = localStorage.getItem('ice');
	if (numberOfIce != null) {
		numberOfIce = JSON.parse(numberOfIce);
	}

	return (
		<main className="border-2 border-border p-2 rounded-2xl">
			<h3 className="text-2xl underline">Stock Recap</h3>
			<div className="flex justify-between text-xl capitalize">
				<div className="flex flex-col items-center">
					<div>
						<p>Cups Left Over</p>
					</div>
					<div>{numberOfCups}</div>
				</div>
				<div className="flex flex-col items-center">
					<div>
						<p>Lemons Left Over</p>
					</div>
					<div>{numberOfLemons}</div>
				</div>
				<div className="flex flex-col items-center">
					<div>
						<p>Sugar Left Over</p>
					</div>
					<div>{numberOfSugar}</div>
				</div>
				<div className="flex flex-col items-center">
					<div>
						<p>Ice Left Over</p>
					</div>
					<div>{numberOfIce}</div>
				</div>
			</div>
		</main>
	);
};

export default DailyRecap;
