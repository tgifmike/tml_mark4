import Link from 'next/link';
import Image from 'next/image';
import PaginationControls from '@/components/Blog/PaginationControls';
import { getPaginationPosts, getPosts } from '@/lib/db-utilites';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import GoodReadExtender from '@/components/GoodRead/GoodReadExtender';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User2Icon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

export default async function allBlogs({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	const page = searchParams['page'] ?? '1';
	const per_page = searchParams['per_page'] ?? '6';

	const fullListPost = await getPosts();
	const posts = await getPaginationPosts(Number(page), Number(per_page));

	const start = (Number(page) - 1) * Number(per_page);
	const end = start + Number(per_page);
	const totalPosts = fullListPost.length;

	return (
		<main className="">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-2">
				{posts.map((post) => (
					<Card key={post.id} className="bg-accent flex flex-col">
						<CardHeader className=''>
							<CardTitle className="">
								<div className='flex flex-col-reverse'>
									<div className=''>
										<p className='text-center text-xl'>
											{post.title}
										</p>
									</div>
									<div>
										{post.image && (
											<Image
												src={post.image}
												alt={post.imageAlt}
												width={500}
												height={250}
												className="object-cover rounded-2xl shadow-2xl max-h-32"
											/>
										)}
									</div>
								</div>
							</CardTitle>
							
						</CardHeader>
						<CardContent>
							<div>
								<GoodReadExtender
									//@ts-ignore
									text={post.preview}
								/>
							</div>
						</CardContent>
						<CardFooter className="mt-auto">
							<div className="flex justify-between align-bottom">
								<div className="flex flex-col">
									<div className="">
										<Avatar>
											<AvatarImage
												src={post?.authorName.authorImage}
												alt="Image of the Author"
												className=""
											/>
											<AvatarFallback>
												<User2Icon />
											</AvatarFallback>
										</Avatar>
									</div>
									<div className="ml-2">
										<span className="text-sm">
											Published on {'  '}
											{post?.createdAt.toLocaleDateString('en-su', {
												year: 'numeric',
												month: 'long',
											})}
										</span>
									</div>
								</div>
								<div>
									<Link
										className={buttonVariants()}
										href={`/blogs/${post.slug}`}
									>
										Read Full Blog Post
									</Link>
								</div>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>

			<div className="flex justify-center p-2">
				<PaginationControls
					hasNextPage={end < totalPosts}
					hasPrevPage={start > 0}
					totalPosts={totalPosts}
				/>
			</div>
		</main>
	);
}
