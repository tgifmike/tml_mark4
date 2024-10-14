'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FC } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';

interface componentProps {
	components: {
		id: string;
		title: string;
		href: string;
		image: string;
		imageAlt: string;
	};
}

const LastestBlogsCarousel: FC<componentProps> = ({ components }) => {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true,  })
	);

	return (
		<main className="flex justify-center mx-auto p-4">
			<Carousel
				opts={{ loop: true }}
				plugins={[plugin.current]}
				className="w-full max-w-7xl"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{components.map((component: any) => (
						<CarouselItem
							key={component.id}
							className="md:basis-1/2 lg:basis-1/3"
						>
							<div className="p-1">
								<Card>
									<CardContent className="flex aspect-square items-center justify-center p-6">
										<Link href={component.href} className="">
											<div>
												<p className='text-center text-2xl font-semibold p-4'>{component.title }</p>
											</div>
											{component.image && (
												<Image
													src={component.image}
													alt={component.imageAlt}
													width={500}
													height={250}
													className="object-cover rounded-2xl shadow-2xl max-h-48"
												/>
											)}
										</Link>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className=''/>
				<CarouselNext />
			</Carousel>
		</main>
	);
};
export default LastestBlogsCarousel;
