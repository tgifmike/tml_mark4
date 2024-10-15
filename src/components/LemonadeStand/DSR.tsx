'use client';
import React, { useEffect, useState } from 'react';

const DSR = () => {
	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	let dailyCupsSold = localStorage.getItem('dailyCupsSold');
	let pitcherCount = localStorage.getItem('pitcherCount');
	let price = localStorage.getItem('price');
	let dailyCost = localStorage.getItem('dailyCost');

	let totalCost = localStorage.getItem('totalCost');
	let totalSales = localStorage.getItem('totalSales');
	let totalProfit = localStorage.getItem('totalProfit');

	let dailySales = 0;
	let tCost = Number(totalCost);
	let tSales = Number(totalSales);
	let dCost = Number(dailyCost);
	let dCups = Number(dailyCupsSold);
	let dailyProfit = 0;
	let tProfit = Number(totalProfit);
	let pricePerCup = Number(price);

	let tCupsSold = localStorage.getItem('totalCupsSoldLS');
	tCupsSold != null ? (tCupsSold = JSON.parse(tCupsSold)) : null;
	let tCups = Number(tCupsSold);

	let [totalCupsSold, setTotalCupsSold] = useState(tCups ? tCups : 0);

	// useEffect(() => {
	// 	totalCupsSold = totalCupsSold + dCups;
	// 	setTotalCupsSold(totalCupsSold);
	// 	localStorage.setItem('totalCupsSoldLS', JSON.stringify(totalCupsSold));
	// }, []);

	function calculateTotalCupsSold() {
		totalCupsSold = totalCupsSold + dCups;
		//setTotalCupsSold(totalCupsSold);
		localStorage.setItem('totalCupsSoldLS', JSON.stringify(totalCupsSold));
	}

	function calculateDailySales() {
		dailySales = dCups * pricePerCup;
	}

	function calculateTotals() {
		tCost = tCost + dCost;
		tSales = tSales + dailySales;
		//tCups = tCups + dCups;

		localStorage.setItem('totalCost', JSON.stringify(tCost));
		localStorage.setItem('totalSales', JSON.stringify(tSales));
		//localStorage.setItem('totalCupsSoldLS', JSON.stringify(tCups));
	}

	function calcualteProfit() {
		dailyProfit = dailySales - dCost;
		tProfit = tSales - tCost;

		localStorage.setItem('dailyProfit', JSON.stringify(dailyProfit));
		localStorage.setItem('totalProfit', JSON.stringify(tProfit));
	}

	calculateDailySales();
	calculateTotalCupsSold();
	calculateTotals();
	calcualteProfit();

	return (
		<main className="border-2 border-border p-2 rounded-2xl">
			<h3 className="text-2xl underline">Daily Sales Report</h3>
			{/* show daily sales */}
			<div className="flex justify-between">
				<div>Daily Sales</div>
				<div>{USDollar.format(dailySales)}</div>
			</div>
			{/* show cups sold	 */}
			<div className="flex justify-between">
				<div>Daily Cups Sold</div>
				<div>{dailyCupsSold}</div>
			</div>
			{/* show pitcher made */}
			<div className="flex justify-between">
				<div>Pitchers Sold</div>
				<div>{pitcherCount}</div>
			</div>
			{/* show daily cost */}
			<div className="flex justify-between">
				<div>Daily Cost</div>
				<div>{USDollar.format(Number(dailyCost))}</div>
			</div>
			{/* show daily profit */}
			<div className="flex justify-between">
				<div>Daily Profit</div>
				<div className={dailyProfit < 0 ? 'text-red-500' : ''}>{USDollar.format(Number(dailyProfit))}</div>
			</div>
		</main>
	);
};

export default DSR;
