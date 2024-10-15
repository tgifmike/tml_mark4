import React from 'react';
import { Button } from '../ui/button';

const ResetGame = () => {
	function reSet() {
		//clear local storage
		localStorage.removeItem('funds');
		localStorage.removeItem('cups');
		localStorage.removeItem('dailyCupsSold');
		localStorage.removeItem('dailySales');
		localStorage.removeItem('dailyCost');
		localStorage.removeItem('dailyProfit');
		localStorage.removeItem('lemons');
		localStorage.removeItem('lemon');
		localStorage.removeItem('sugar');
		localStorage.removeItem('ice');
		localStorage.removeItem('day');
		localStorage.removeItem('price');
		localStorage.removeItem('lemonsInPitcher');
		localStorage.removeItem('sugarInPitcher');
		localStorage.removeItem('iceInCup');
		localStorage.removeItem('totalSales');
		localStorage.removeItem('totalCost');
		localStorage.removeItem('cupsMessage');
		localStorage.removeItem('CustomerMessage');
		localStorage.removeItem('lemonMessage');
		localStorage.removeItem('sugarMessage');
		localStorage.removeItem('iceMessage');
		localStorage.removeItem('pitcherCount');
		localStorage.removeItem('todaysTempLS');
		localStorage.removeItem('totalProfit');
		localStorage.removeItem('topProfitLS');
		localStorage.removeItem('totalCupsSoldLS');
		window.location.reload();
	}
	return (
		<main>
			<Button
				onClick={() => reSet()}
				className=""
				variant={'destructive'}
				size={'lg'}
			>
				Reset
			</Button>
		</main>
	);
};

export default ResetGame;
