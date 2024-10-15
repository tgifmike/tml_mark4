import React from 'react';
import Play from './Play';
import ResetGame from './ResetGame';

const GameFunctions = (props: any) => {
	let temp = props.temp;

	return (
		<main className="w-1/2 md:w-1/3 md:border-2 border-border rounded-2xl md:shadow-xl p-1 md:p-4">
			<div className="flex pb-2 justify-center md:justify-start">
				<h3 className="text-2xl md:text-4xl pb-2">Functions</h3>
			</div>
			<div className="flex flex-col gap-2">
				<Play setShowResults={props.setShowResults} temp={props.temp} />
				<ResetGame />
			</div>
		</main>
	);
};

export default GameFunctions;
