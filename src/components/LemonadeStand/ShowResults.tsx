'use client';

import React, { useEffect, useState } from 'react';
import ResetGame from './ResetGame';
import DailyRecap from './DailyRecap';
import DSR from './DSR';
import Messages from './Messages';
import ProfitLoss from './ProfitLoss';
import { toast } from '@/hooks/use-toast';
import { DollarSignIcon, MessageCircleQuestion } from 'lucide-react';
import { Button } from '../ui/button';

const ShowResults = () => {
	let dayCount = localStorage.getItem('day');
	dayCount != null ? (dayCount = JSON.parse(dayCount)) : null;

	let availableFunds = localStorage.getItem('funds');
	availableFunds != null ? (availableFunds = JSON.parse(availableFunds)) : null;

	const [bankrupt, setBankrupt] = useState(false);

	useEffect(() => {
		if (Number(availableFunds) < 1) {
			setBankrupt(true);
		}
	}, [bankrupt]);

	function playNextDay() {
		if (!bankrupt) {
			//@ts-ignore
			localStorage.setItem('day', dayCount + 1);
			localStorage.removeItem('dailyCupsSold');
			localStorage.removeItem('dailySales');
			localStorage.removeItem('cupsMessage');
			localStorage.removeItem('CustomerMessage');
			localStorage.removeItem('lemonMessage');
			localStorage.removeItem('sugarMessage');
			localStorage.removeItem('iceMessage');
			localStorage.removeItem('pitcherCount');
			localStorage.removeItem('dailyCost');
			localStorage.removeItem('dailyProfit');
			window.location.reload();
		} else {
			toast({
				title: 'Something Went Wrong',
				description: (
					<div className="flex items-center">
						<DollarSignIcon size={40} strokeWidth={1} />
						<p className="text-lg ml-2">Insufficient Funds!</p>
					</div>
				),
				variant: 'destructive',
			});
		}
	}

	return (
		<main className="flex flex-col justify-center mx-auto w-full p-2 ">
			<div>
				<h3 className="text-4xl text-center">Results</h3>
			</div>
			<div className="p-2">
				<DailyRecap />
			</div>
			<div className="flex flex-row gap-2 p-2">
				<div className="w-1/3">
					<DSR />
				</div>
				<div className="w-1/3">
					<Messages bankrupt={bankrupt} />
				</div>
				<div className="w-1/3">
					<ProfitLoss />
				</div>
			</div>
			<div className="flex flex-col gap-4 w-1/4">
				<Button
					onClick={() => playNextDay()}
					variant={'outline'}
					size={'lg'}
					className={
						bankrupt
							? 'disabled bg-red-500'
							: ''
					}
				>
					Play Next Day
				</Button>
				<ResetGame />
			</div>
		</main>
	);
};

export default ShowResults;
