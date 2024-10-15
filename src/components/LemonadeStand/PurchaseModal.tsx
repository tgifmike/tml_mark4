import React, { useEffect, useState } from 'react';
import { LuCupSoda } from 'react-icons/lu';
import { LiaLemonSolid } from 'react-icons/lia';
import { GiSugarCane } from 'react-icons/gi';
import { GiIceCube } from 'react-icons/gi';
import { DollarSign } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Button } from '../ui/button';

const PurchaseModal = (props: any) => {
	let USDollar = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	let dailyCosts = localStorage.getItem('dailyCost');
	if (dailyCosts != null) {
		dailyCosts = JSON.parse(dailyCosts);
	}

	let cupsArray = [
		[1, 25],
		[5, 100],
		[10, 300],
	];
	let iceArray = [
		[1.0, 50],
		[5.0, 300],
		[10.0, 750],
	];
	let lemonArray = [
		[1.0, 20],
		[5.0, 250],
		[10.0, 700],
	];
	let sugarArray = [
		[1.0, 20],
		[5.0, 250],
		[10.0, 700],
	];

	let numberOfSugar = props.numberOfSugar;
	let numberOfCups = props.numberOfCups;
	let numberOfIce = props.numberOfIce;
	let numberOfLemons = props.numberOfLemons;
	let availableFunds = props.availableFunds;
	const [dailyCost, setDailyCost] = useState(dailyCosts ? dailyCosts : 0);

	//move daily cost to local Storage
	useEffect(() => {
		localStorage.setItem('dailyCost', JSON.stringify(dailyCost));
	}, [dailyCost]);

	function purchaseSugar(cost: number, sugar: number) {
		if (availableFunds >= cost) {
			//add to number of sugar
			numberOfSugar = numberOfSugar + sugar;
			//reduce funds available
			availableFunds = availableFunds - cost;

			setDailyCost(Number(dailyCost) + cost);
			localStorage.setItem('sugar', numberOfSugar);
			props.setNumberOfSugar(numberOfSugar);
			props.setAvaialbleFunds(availableFunds);
			toast({
				title: 'Success',
				description: (
					<div className="flex items-center">
						<GiSugarCane className="text-2xl ml-1" />
						<p className="text-lg ml-2">{numberOfSugar} Sugar Purchased!</p>
					</div>
				),
				variant: 'default',
			});
			
		} else {
			toast({
				title: 'Something Went Wrong',
				description: (
					<div className="flex items-center">
						<DollarSign size={40} strokeWidth={1} />
						<p className="text-lg ml-2">Insufficient Funds!</p>
					</div>
				),
				variant: 'destructive',
			});
			
		}
	}
	function purchaseCups(cost: number, cups: number) {
		if (availableFunds >= cost) {
			//add to number of cups
			numberOfCups = numberOfCups + cups;
			//reduce funds available

			availableFunds = availableFunds - cost;

			setDailyCost(Number(dailyCost) + cost);

			props.setNumberOfCups(numberOfCups);
			localStorage.setItem('cups', numberOfCups);
			props.setAvaialbleFunds(availableFunds);
			toast({
				title: 'Success',
				description: (
					<div className="flex items-center">
						<LuCupSoda className="text-2xl" />
						<p className="text-lg ml-2">{numberOfCups} Cups Purchased!</p>
					</div>
				),
				variant: 'default',
			});
			localStorage.setItem('funds', availableFunds);
		} else {
			toast({
				title: 'Something Went Wrong',
				description: (
					<div className="flex items-center">
						<DollarSign size={40} strokeWidth={1} />
						<p className="text-lg ml-2">Insufficient Funds!</p>
					</div>
				),
				variant: 'destructive',
			});
		}
	}
	function purchaseLemons(cost: number, lemons: number) {
		if (availableFunds >= cost) {
			numberOfLemons = numberOfLemons + lemons;
			availableFunds = availableFunds - cost;
			setDailyCost(Number(dailyCost) + cost);
			props.setNumberOfLemons(numberOfLemons);
			localStorage.setItem('lemon', numberOfLemons);
			props.setAvaialbleFunds(availableFunds);
			toast({
				title: 'Success',
				description: (
					<div className="flex items-center">
						<LiaLemonSolid className="text-3xl" />
						<p className="text-lg ml-2">{numberOfLemons} Lemons Purchased!</p>
					</div>
				),
				variant: 'default',
			});
		} else {
			toast({
				title: 'Something Went Wrong',
				description: (
					<div className="flex items-center">
						<DollarSign size={40} strokeWidth={1} />
						<p className="text-lg ml-2">Insufficient Funds!</p>
					</div>
				),
				variant: 'destructive',
			});
		}
	}
	function purchaseIce(cost: number, ice: number) {
		if (availableFunds >= cost) {
			//add to number of cups
			numberOfIce = numberOfIce + ice;
			//reduce funds available
			availableFunds = availableFunds - cost;
			setDailyCost(Number(dailyCost) + cost);
			localStorage.setItem('ice', numberOfIce);
			props.setNumberOfIce(numberOfIce);
			props.setAvaialbleFunds(availableFunds);
			toast({
				title: 'Success',
				description: (
					<div className="flex items-center">
						<GiIceCube className="text-2xl ml-2" />
						<p className="text-lg ml-2">{numberOfIce} Ice Purchased!</p>
					</div>
				),
				variant: 'default',
			});
		} else {
			toast({
				title: 'Something Went Wrong',
				description: (
					<div className="flex items-center">
						<DollarSign size={40} strokeWidth={1} />
						<p className="text-lg ml-2">Insufficient Funds!</p>
					</div>
				),
				variant: 'destructive',
			});
		}
	}

	function completePurchase() {
		
	}
	return (
		<main className="w-full p-4">
			<div className="flex justify-center">
				<Button
					className=""
					variant={'outline'}
					onClick={() =>
						//@ts-ignore
						document.getElementById('PurchaseModal').showModal()
					}
				>
					More Supplies
				</Button>
			</div>
			<dialog id="PurchaseModal" className="p-4">
				<div className="">
					<div className="flex flex-row md:flex-col justify-between md:justify-normal pb-2">
						<h3 className="md:font-bold text-md md:text-xl">
							Purchasing Stock
						</h3>
						<h4 className="text-md md:text-xl text-center md:pb-4">
							Available Funds: {USDollar.format(availableFunds)}
						</h4>
					</div>
					<div className="grid grid-cols-4 gap-1 md:gap-2 text-xl text-center">
						<div className="flex justify-center align-baseline">
							{numberOfCups} <LuCupSoda className="text-2xl" />
						</div>
						<div className="flex justify-center align-baseline">
							{numberOfLemons} <LiaLemonSolid className="text-3xl" />
						</div>
						<div className="flex justify-center align-baseline">
							{numberOfSugar} <GiSugarCane className="text-2xl ml-1" />
						</div>
						<div className="flex justify-center align-baseline">
							{numberOfIce} <GiIceCube className="text-2xl ml-2" />
						</div>
					</div>
					<div className="grid grid-cols-4 gap-2 text-sm">
						<div>
							{cupsArray.map((arr, idx) => (
								<div key={idx} className="flex flex-col p-2">
									<p className="text-center p-2 text-md">
										{arr[1]} Cups for {USDollar.format(arr[0])}{' '}
									</p>
									<Button
										onClick={() => purchaseCups(arr[0], arr[1])}
										variant={'outline'}
										className={
											availableFunds < arr[0] ? 'bg-red-500 disabled' : ''
										}
									>
										Buy!
									</Button>
								</div>
							))}
						</div>
						<div>
							{lemonArray.map((arr, idx) => (
								<div key={idx} className="flex flex-col p-2">
									<p className="text-center p-2 text-md">
										{arr[1]} Lemons for {USDollar.format(arr[0])}{' '}
									</p>
									<Button
										onClick={() => purchaseLemons(arr[0], arr[1])}
										variant={'outline'}
										className={
											availableFunds < arr[0] ? 'bg-red-500 disabled' : ''
										}
									>
										Buy!
									</Button>
								</div>
							))}
						</div>
						<div>
							{sugarArray.map((arr, idx) => (
								<div key={idx} className="flex flex-col p-2">
									<p className="text-center p-2 text-md">
										{arr[1]} Sugar for {USDollar.format(arr[0])}{' '}
									</p>
									<Button
										onClick={() => purchaseSugar(arr[0], arr[1])}
										variant={'outline'}
										className={
											availableFunds < arr[0] ? 'bg-red-500 disabled' : ''
										}
									>
										Buy!
									</Button>
								</div>
							))}
						</div>
						<div>
							{iceArray.map((arr, idx) => (
								<div key={idx} className="flex flex-col p-2">
									<p className="text-center p-2 text-md">
										{arr[1]} Cubes for {USDollar.format(arr[0])}{' '}
									</p>
									<Button
										onClick={() => purchaseIce(arr[0], arr[1])}
										variant={'outline'}
										className={
											availableFunds < arr[0] ? 'bg-red-500 disabled' : ''
										}
									>
										Buy!
									</Button>
								</div>
							))}
						</div>
					</div>

					<div className="modal-action">
						<form method="dialog">
							{/* if there is a button in form, it will close the modal */}
							<Button onClick={() => completePurchase()} className="">
								Done
							</Button>
						</form>
					</div>
				</div>
			</dialog>
		</main>
	);
};

export default PurchaseModal;
