'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { FC } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { User2Icon } from 'lucide-react';

interface componentProps {
	components: {
		id: string;
		title: string;
		href: string;
		image: string;
		imageAlt: string;
		authorName: string;
		authorImage: string;
		created: Date;
	}[]
}

const LastestBlogsCarousel: FC<componentProps> = ({ components }) => {
	const plugin = React.useRef(
		Autoplay({ delay: 3000, stopOnInteraction: true,  })
	);

	return (
		<main className="flex flex-col md:justify-center mx-auto md:p-4 w-screen">
			<Carousel
				opts={{ loop: true, align: 'start' }}
				plugins={[plugin.current]}
				className="w-full max-w-7xl"
				onMouseEnter={plugin.current.stop}
				onMouseLeave={plugin.current.reset}
			>
				<CarouselContent>
					{components.map((component: any) => (
						<CarouselItem
							key={component.id}
							className="basis-1/1 md:basis-1/2 lg:basis-1/3"
						>
							<div className="p-2 h-full w-screen md:w-full">
								<Card className="flex flex-col h-full">
									<CardContent className="flex flex-col items-center justify-center px-6 py-0">
										<div className="flex flex-col h-full">
											<div className="">
												<p className="text-center text-chart-4 text-xl font-semibold p-4">
													{component.title}
												</p>
											</div>

											<div>
												<Link href={component.href} className="">
													{component.image && (
														<Image
															src={component.image}
															alt={component.imageAlt}
															width={500}
															height={250}
															className="object-cover rounded-2xl shadow-2xl min-h-48 max-h-48"
														/>
													)}
												</Link>
											</div>
										</div>
									</CardContent>
									<CardFooter className="mt-auto pt-2">
										<div className="flex flex-col gap-2 ">
											<div className='flex items-center gap-2'>
												<div className=''>
													<Avatar>
														<AvatarImage
															src={component.authorImage}
															alt="Image of the Author"
															className=""
														/>
														<AvatarFallback>
															<User2Icon />
														</AvatarFallback>
													</Avatar>
												</div>
												<div>
													<p className="ml-2">{component.authorName}</p>
												</div>
											</div>
											<div>
												<span className="pt-4 text-sm">
													Published on {'  '}
													{component.created.toLocaleDateString('en-su', {
														year: 'numeric',
														month: 'long',
													})}
												</span>
											</div>
										</div>

										
									</CardFooter>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</main>
	);
};
export default LastestBlogsCarousel;
