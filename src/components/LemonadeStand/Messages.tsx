import React from 'react';

const Messages = (props: any) => {
	let customerMessage = localStorage.getItem('customerMessage');
	let cupsMessage = localStorage.getItem('cupsMessage');
	let iceMessage = localStorage.getItem('iceMessage');
	let sugarMessage = localStorage.getItem('sugarMessage');
	let lemonMessage = localStorage.getItem('lemonMessage');

	let bankrupt = props.bankrupt;

	return (
		<main className="border-2 border-border p-2 rounded-2xl">
			<div>
				<h3 className="text-2xl underline">Messages</h3>
			</div>
			<div className="text-lg text-red-600">
				{bankrupt ? (
					<div>Your Bankrupt!!</div>
				) : (
					<div>
						<div>{customerMessage}</div>
						<div>{cupsMessage}</div>
						<div>{iceMessage}</div>
						<div>{lemonMessage}</div>
						<div>{sugarMessage}</div>
					</div>
				)}
			</div>
		</main>
	);
};

export default Messages;
