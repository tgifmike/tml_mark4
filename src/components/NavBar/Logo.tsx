'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/newLogo.png';
import { useMediaQuery } from '@/app/hooks/use-media-query';


const Logo = () => {
	const isDesktop = useMediaQuery('(min-width: 1350px)');

	return isDesktop ? (
		<div className="">
			<Link href="/">
				<div className="flex items-center">
					<h1 className="text-6xl font-semibold font-mono text-chart-4 mr-2">
						The Manager Life
					</h1>

					<Image
						src={logo}
						alt="Image of Logo"
						width={75}
						height={75}
						className="object-cover rounded-full"
					/>
				</div>
			</Link>
		</div>
	) : (
		<div>
			<Link href="/">
				<Image
					src={logo}
					alt="Image of Logo"
					width={100}
					height={100}
					className="object-cover rounded-full"
				/>
			</Link>
		</div>
	);
};

export default Logo;
