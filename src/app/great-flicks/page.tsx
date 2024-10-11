import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getMovies } from '@/lib/db-utilites';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import GoodReadExtender from '@/components/GoodRead/GoodReadExtender';

const GreatFlicks = async () => {
	const movies = await getMovies();

	return (
		<main className="">
			<h1 className="text-4xl capitalize font-mono px-8">good reads</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-2">
				{movies.map((movie) => (
					<Card
						key={movie.id}
						className="bg-accent">
						<CardHeader className="p-2">
							<CardTitle className="flex justify-center">
								<p className="text-xl font-mono">{movie.movieTitle}</p>
							</CardTitle>
							<CardDescription></CardDescription>
						</CardHeader>
						<CardContent className="">
							<div className="flex flex-row justify-between">
								<div className="w-3/4">
									<GoodReadExtender text={movie.content} />
								</div>
								<div className="w-1/4">
									{movie.movieImage && (
										<Image
											src={movie.movieImage}
											alt={movie.movieImgaeAlt}
											width={150}
											height={75}
											className="object-cover border-2 border-border"
										/>
									)}
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-center p-0">
							<Link
								href={movie.url}
								className="text-md underline underline-offset-2"
							>
								Check it out on Amazon!
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>
		</main>
	);
};

export default GreatFlicks;
