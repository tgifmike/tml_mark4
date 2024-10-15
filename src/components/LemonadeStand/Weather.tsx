'use client';

import React, { useEffect, useState } from 'react';

import { MdOutlineWbSunny } from 'react-icons/md';
import { WiDayCloudy } from 'react-icons/wi';
import { IoCloudySharp } from 'react-icons/io5';
import { WiCloudyGusts } from 'react-icons/wi';
import { GiRaining } from 'react-icons/gi';

const Weather = (props: any) => {
	let condition = props.condition;
	let temp = props.temp;
	let icon: any = '';

	const sunnyIcon = <MdOutlineWbSunny className="text-5xl text-yellow-300" />;
	const partlyCloudyIcon = <WiDayCloudy className="text-5xl text-slate-400" />;
	const cloudyIcon = <IoCloudySharp className="text-5xl text-slate-800" />;

	const windyIcon = <WiCloudyGusts className="text-5xl text-slate-400" />;
	const rainingIcon = <GiRaining className="text-5xl text-blue-400" />;

	switch (condition) {
		case 'Sunny':
			icon = sunnyIcon;
			break;
		case 'Partly Cloudy':
			icon = partlyCloudyIcon;
			break;
		case 'Cloudy':
			icon = cloudyIcon;
			break;
		case 'Windy':
			icon = windyIcon;
			break;
		case 'Raining':
			icon = rainingIcon;
			break;
		default:
	}

	localStorage.setItem('todaysConditionLS', condition);
	localStorage.setItem('todaysTempLS', temp);
	return (
		<main className="w-1/2 md:w-1/3 md:border-2 border-border rounded-2xl md:shadow-xl p-1 md:p-4">
			<div className="flex pb-2 justify-center md:justify-start">
				<h2 className="text-2xl md:text-4xl">Weather</h2>
			</div>
			<div>
				<h4 className="text-md md:text-2xl text-primary text-center md:pb-4">
					Today's Forecast
				</h4>
			</div>
			<div className="flex justify-between">
				<div>
					<h6 className="text-xl">{condition}</h6>
				</div>
				<div>{icon}</div>
				<div>
					<h6 className="text-xl">{temp} °F</h6>
				</div>
			</div>
		</main>
	);
};

export default Weather;
