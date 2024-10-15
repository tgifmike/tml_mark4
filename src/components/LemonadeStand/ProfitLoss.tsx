import React from 'react';

const ProfitLoss = () => {
	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	let totalSales = localStorage.getItem('totalSales');
	let totalCost = localStorage.getItem('totalCost');
	let totalProfit = localStorage.getItem('totalProfit');

	let tCupsSold = localStorage.getItem('totalCupsSoldLS');
	tCupsSold != null ? (tCupsSold = JSON.parse(tCupsSold)) : null;
	let tCups = Number(tCupsSold);

	return (
		<main className="border-2 border-border p-2 rounded-2xl">
			<div>
				<h3 className="text-2xl underline">P & L</h3>
			</div>
			<div className="flex justify-between">
				<div>Total Cups Sold</div>
				<div>{tCups}</div>
			</div>
			{/* show total sales */}
			<div className="flex justify-between">
				<div>Total Sales</div>
				<div>{USDollar.format(Number(totalSales))}</div>
			</div>
			{/* show total cost */}
			<div className="flex justify-between">
				<div>Total Costs</div>
				<div>{USDollar.format(Number(totalCost))}</div>
			</div>
			{/* show total profit */}
			<div className="flex justify-between">
				<div>Total Profit</div>
				<div className={Number(totalProfit) < 0 ? 'text-red-500' : ''}>{USDollar.format(Number(totalProfit))}</div>
			</div>
		</main>
	);
};

export default ProfitLoss;
