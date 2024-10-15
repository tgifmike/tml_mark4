'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

const Play = ({ setShowResults }: any) => {
	let lemons = localStorage.getItem('lemons');
	if (lemons != null) {
		lemons = JSON.parse(lemons);
	}
	let sugar = localStorage.getItem('sugar');
	if (sugar != null) {
		sugar = JSON.parse(sugar);
	}
	let lemonsInPitcher = localStorage.getItem('lemonsInPitcher');
	if (lemonsInPitcher != null) {
		lemonsInPitcher = JSON.parse(lemonsInPitcher);
	}

	let sugarInPitcher = localStorage.getItem('sugarInPitcher');
	if (sugarInPitcher != null) {
		sugarInPitcher = JSON.parse(sugarInPitcher);
	}
	let price = localStorage.getItem('price');
	if (price != null) {
		price = JSON.parse(price);
	}
	let iceInCup = localStorage.getItem('iceInCup');
	if (iceInCup != null) {
		iceInCup = JSON.parse(iceInCup);
	}
	let cups = localStorage.getItem('cups');
	if (cups != null) {
		cups = JSON.parse(cups);
	}

	let ice = localStorage.getItem('ice');
	if (ice != null) {
		ice = JSON.parse(ice);
	}
	let dailyCupsSold = localStorage.getItem('dailyCupsSold');
	if (dailyCupsSold != null) {
		dailyCupsSold = JSON.parse(dailyCupsSold);
	}
	let funds = localStorage.getItem('funds');
	if (funds != null) {
		funds = JSON.parse(funds);
	}
	let dailySales = localStorage.getItem('dailySales');
	if (dailySales != null) {
		dailySales = JSON.parse(dailySales);
	}

	let numberOfDays = localStorage.getItem('day');
	let day = Number(numberOfDays) + 1;

	let numberOfLemons = Number(lemons);
	let numberOfSugar = Number(sugar);
	let numberOfCups = Number(cups);
	let numberOfIce = Number(ice);
	let cupsSold = Number(dailyCupsSold);
	let lemonsPerPitcher = Number(lemonsInPitcher);
	let sugarPerPitcher = Number(sugarInPitcher);
	let icePerCup = Number(iceInCup);
	let availableFunds = Number(funds);
	let dailySalesTotal = Number(dailySales);
	let pitcherCount: number = 0;
	const [pitcherMade, setPitcherMade] = useState(false);

	let potentialCustomers = findPotentialCustomers();

	let totalProfit = localStorage.getItem('totalProfit');
	totalProfit != null ? (totalProfit = JSON.parse(totalProfit)) : null;
	let profit = Number(totalProfit);

	let topProfit = localStorage.getItem('topProfitLS');
	topProfit != null ? (topProfit = JSON.parse(topProfit)) : null;
	let tProfit = Number(topProfit);
	const [highProfit, setHighProfit] = useState(tProfit ? tProfit : 0);

	useEffect(() => {
		if (highProfit < profit) {
			setHighProfit(profit);
			//@ts-ignore
			localStorage.setItem('topProfitLS', profit);
		}
	}, [highProfit]);

	function findTemp() {
		let temp = localStorage.getItem('todaysTempLS');
		temp != null ? (temp = JSON.parse(temp)) : null;
		let todaysTemp = Number(temp);
		return todaysTemp;
	}

	function findConditon() {
		let condition = localStorage.getItem('todaysConditionLS');
		return condition;
	}

	function findWeatherScore() {
		let temp = findTemp();
		let weatherScore = 0;
		if (temp > 95) {
			weatherScore = 20;
		} else if (temp < 95 && temp > 75) {
			weatherScore = 10;
		} else if (temp < 75 && temp > 60) {
			weatherScore = 5;
		} else {
			weatherScore = 1;
		}

		return weatherScore;
	}

	function findConditionScore() {
		let condition = findConditon();
		let conditionScore = 0;

		switch (condition) {
			case 'Sunny':
				conditionScore = 20;
				break;
			case 'Partly Cloudy':
				conditionScore = 15;
				break;
			case 'Cloudy':
				conditionScore = 10;
				break;
			case 'Windy':
				conditionScore = 5;
				break;
			case 'Raining':
				conditionScore = 0;
				break;
			default:
				conditionScore = 0;
		}
		return conditionScore;
	}

	function getRecipeScore() {
		let score = 0;
		// let lemonsPerPitcher = Number(lemonsInPitcher);
		// let sugarPerPitcher = Number(sugarInPitcher);
		// let icePerCup = Number(iceInCup);

		if (lemonsPerPitcher > 7 || lemonsPerPitcher < 4) {
			score = score - 5;
		} else {
			score = score + 5;
		}

		if (sugarPerPitcher > 6 || sugarPerPitcher < 3) {
			score = score - 5;
		} else {
			score = score + 5;
		}

		if (icePerCup > 8 || icePerCup < 4) {
			score = score - 5;
		} else {
			score = score + 5;
		}

		return score;
	}

	function findPotentialCustomers() {
		let min = 100;
		let max = 150;

		let potentialCustomer = Math.floor(Math.random() * (max - min + 1) + min);

		let score = getRecipeScore();
		let weatherScore = findWeatherScore();
		let conditionScore = findConditionScore();
		potentialCustomer =
			potentialCustomer + score + weatherScore + conditionScore;

		return potentialCustomer;
	}

	function makePitcher() {
		if (
			numberOfLemons >= lemonsPerPitcher &&
			numberOfSugar >= sugarPerPitcher &&
			numberOfIce >= icePerCup &&
			potentialCustomers > 0 &&
			numberOfCups > 0
		) {
			//addign to pitcher count
			setPitcherMade(true);
			pitcherCount++;
			localStorage.setItem('pitcherCount', JSON.stringify(pitcherCount));

			//reduce number of lemons and sugar since we made pitcher
			numberOfLemons = numberOfLemons - lemonsPerPitcher;
			localStorage.setItem('lemons', JSON.stringify(numberOfLemons));
			numberOfSugar = numberOfSugar - sugarPerPitcher;
			localStorage.setItem('sugar', JSON.stringify(numberOfSugar));

			if (numberOfLemons < lemonsPerPitcher) {
				localStorage.setItem(
					'lemonMessage',
					JSON.stringify('Sold Out of Lemons!')
				);
			}
			if (numberOfSugar < sugarPerPitcher) {
				localStorage.setItem(
					'sugarMessage',
					JSON.stringify('Sold Out of Sugar!')
				);
			}
			return true;
		}
		return false;
	}

	function determinPurchases() {
		let potentialCups = 0;

		makePitcher() ? (potentialCups = 8) : (potentialCups = 0);

		while (
			potentialCustomers > 0 &&
			numberOfIce >= icePerCup &&
			potentialCups > 0 &&
			numberOfCups > 0
		) {
			potentialCustomers--;
			potentialCups--;
			cupsSold++;
			localStorage.setItem('dailyCupsSold', JSON.stringify(cupsSold));
			numberOfCups--;
			localStorage.setItem('cups', JSON.stringify(numberOfCups));
			numberOfIce = numberOfIce - icePerCup;
			localStorage.setItem('ice', JSON.stringify(numberOfIce));
			dailySalesTotal = cupsSold * Number(price);
			localStorage.setItem('daliySales', JSON.stringify(dailySales));
			availableFunds = Number(funds) + dailySalesTotal;
			localStorage.setItem('funds', JSON.stringify(availableFunds));
		}
		if (numberOfCups < 1) {
			localStorage.setItem('cupsMessage', JSON.stringify('Sold Out of Cups!'));
		}

		if (numberOfIce < icePerCup) {
			localStorage.setItem('iceMessage', JSON.stringify('Sold Out of Ice!'));
		}
		if (potentialCustomers < 0) {
			localStorage.setItem(
				'customerMessage',
				JSON.stringify('No More Customers!')
			);
		}

		if (
			potentialCustomers > 0 &&
			numberOfIce >= icePerCup &&
			numberOfCups > 0
		) {
			setPitcherMade(false);
			determinPurchases();
		}
	}
	function playGame() {
		determinPurchases();
		setShowResults(true);
	}

	return (
		<main>
			<Button
				onClick={() => playGame()}
				className=""
				variant={'outline'}
				size={'lg'}
			>
				Start Day {day}
			</Button>
		</main>
	);
};

export default Play;
