

import React  from 'react';
import { FaSackDollar } from 'react-icons/fa6';

const Bank = ({ availableFunds }: any) => {
	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});

	let topProfit = localStorage.getItem('topProfitLS');
	topProfit != null ? (topProfit = JSON.parse(topProfit)) : null;
	let tProfit = Number(topProfit);

	return (
		<main className="w-1/3 md:border-2 border-border rounded-2xl md:shadow-xl p-1 md:p-4">
			<div className="flex  flex-row md:justify-between pb-1 md:pb-2">
				<div>
					<h2 className="text-2xl md:text-4xl">Bank</h2>
				</div>
				<div>
					<FaSackDollar className="text-xl md:text-2xl ml-2 mt-1" />
				</div>
			</div>
			<div className="flex flex-col md:flex-row md:justify-between text-xl">
				<div>Available Funds:</div>
				<div>{USDollar.format(Number(availableFunds))}</div>
			</div>
			<div className="flex flex-col md:flex-row md:justify-between text-xl">
				<div>Top Profit Score:</div>
				<div className={tProfit < 0 ? 'text-red-500' : ''}>{USDollar.format(Number(tProfit))}</div>
			</div>
		</main>
	);
};

export default Bank;
