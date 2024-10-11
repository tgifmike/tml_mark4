'use client';

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '../ui/pagination';

interface PaginationControlsProps {
	hasNextPage: boolean;
	hasPrevPage: boolean;
	totalPosts: Number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
	hasNextPage,
	hasPrevPage,
	totalPosts,
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const page = searchParams.get('page') ?? '1';
	const per_page = searchParams.get('per_page') ?? '6';
	const lastPage = Math.ceil(Number(totalPosts) / Number(per_page))
	const items = Array.from({length: 100}, (_, i) => `${i + 1}`)
	const startIndex = 0
	const currentItems = items.slice(startIndex, startIndex + lastPage);
	
	
	return (
		<div>
			{/* <div className="flex gap-8 text-primary text-lg">
				<button
					className=""
					disabled={!hasPrevPage}
					onClick={() => {
						router.push(
							`/all-blogs?page=${Number(page) - 1}&per_page=${per_page}`
						);
					}}
				>
					<IoIosArrowBack />
				</button>

				<div>
					{page} / {Math.ceil(Number(totalPosts) / Number(per_page))}
				</div>

				<button
					className=""
					disabled={!hasNextPage}
					onClick={() => {
						router.push(
							`/all-blogs?page=${Number(page) + 1}&per_page=${per_page}`
						);
					}}
				>
					<IoIosArrowForward />
				</button>
			</div> */}
			<div>
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href={`/all-blogs?page=${
									Number(page) - 1
								}&per_page=${per_page}`}
								className={
									Number(page) <= 1
										? 'pointer-events-none opacity-50'
										: undefined
								}
							></PaginationPrevious>
						</PaginationItem>

						{currentItems.map((item, idx) => (
							<PaginationItem
								key={idx}
			
							>
								<PaginationLink
									isActive = {page === item}
									
									href={`/all-blogs?page=${item}&per_page=${per_page}`}
								
								>
									{item}
								</PaginationLink>
							</PaginationItem>
						))}

						<PaginationItem>
							<PaginationNext
								href={`/all-blogs?page=${
									Number(page) + 1
								}&per_page=${per_page}`}
								className={
									Number(page) >= lastPage
										? 'pointer-events-none opacity-50'
										: undefined
								}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
};

export default PaginationControls;
