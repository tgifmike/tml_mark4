
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBooks } from '@/lib/db-utilites';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import GoodReadExtender from '@/components/GoodRead/GoodReadExtender';

const GoodReads = async () => {
	const books = await getBooks();

	return (
		<main className="">
			<h1 className="text-4xl capitalize font-mono px-8">good reads</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-2">
				{books.map((book) => (
					<Card
						key={book.id}
						className="bg-accent">
						<CardHeader className="p-2">
							<CardTitle className="flex justify-center">
								<p className="text-xl font-mono">{book.bookTitle}</p>
							</CardTitle>
							<CardDescription></CardDescription>
						</CardHeader>
						<CardContent className="">
							<div className="flex flex-row justify-between">
								<div className="w-3/4">
									<GoodReadExtender text={book.content} />
								</div>
								<div className="w-1/4">
									{book.bookImage && (
										<Image
											src={book.bookImage}
											alt={book.bookImgaeAlt}
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
								href={book.url}
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

export default GoodReads;
