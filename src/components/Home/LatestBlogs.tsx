import React from 'react';

import { getLatestPosts } from '@/lib/db-utilites';
import LastestBlogsCarousel from './LastestBlogsCarousel';

export async function LatestBlogs() {
	const posts = await getLatestPosts(5);
	const components = posts.map((post) => ({
		id: post.id,
		title: post.title,
		href: `/blogs/${post.slug}`,
		image: post.image,
        imageAlt: post.imageAlt,
        authorImage: post.authorName.authorImage,
        authorName: post.authorName.authorName,
        created: post.createdAt,
	}));
	
	return (
		<main className="flex flex-col justify-center mx-auto bg-accent overflow-visible">
			<div className='flex justify-center'>
				{' '}
				<h3 className='text-3xl font-medium capitalize pt-6'>Our latest blogs...</h3>
			</div>

			<LastestBlogsCarousel components={components} />
		</main>
	);
}
