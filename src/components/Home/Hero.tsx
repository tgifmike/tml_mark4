import Link from 'next/link';
import React from 'react';

const Hero = () => {
	return (
		<div>
			<div
                // className="h-[calc(100vh-0px)]"
                className='h-screen'
				style={{
					backgroundImage:
						'url(' +
						'https://images.pexels.com/photos/3771101/pexels-photo-3771101.jpeg?auto=compress&cs=tinysrgb&w=600' +
						')',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				
				<div className="text-center mx-auto text-accent">
					
						<h1 className="text-7xl font-bold z-10">
							The Manager Life
						</h1>
						{/* <h2 className="text-3xl pt-10 italic text-warning capitalize w-full mx-auto z-10 font-extrabold">
							A Blog were Hospitality Managers come to learn and be entertained!
						</h2> */}
					
				</div>
			</div>
		</div>
	);
};

export default Hero;
