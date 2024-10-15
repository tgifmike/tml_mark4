import { BlogCatAccordion } from '@/components/Blog/BlogCatAccordion';
import NewBlogSearchList from '@/components/Blog/NewSearchList';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ListCollapse, Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const BlogHome = ({ searchParams }: { searchParams?: { query?: string } }) => {
	const query = searchParams?.query || '';

	return (
		<main>
			<div className="flex flex-row justify-between p-4">
				<div className="w-1/3 p-2">
					<div className="flex gap-2">
						<h2 className="text-4xl pb-4">Search By Category </h2>
						
					</div>
					<BlogCatAccordion />
				</div>

				<div className="w-1/3 p-2">
					<p className="text-4xl pb-4">
						To see a preview of all our blog posts
					</p>

					<div className="flex justify-center">
						<Link
							className={cn(
								buttonVariants({ variant: 'outline', size: 'lg' }),
								
							)}
							href="/all-blogs"
						>
							All Blogs
						</Link>
					</div>
				</div>
				<div className="w-1/3 p-2">
					<div className="flex gap-2">
						<h2 className="text-4xl pb-4">Search By Title</h2>
						<Search size={32} className="mt-1" />
					</div>

					<NewBlogSearchList />
				</div>
			</div>
		</main>
	);
};

export default BlogHome;
