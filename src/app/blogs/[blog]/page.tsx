import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getPost } from '@/lib/db-utilites';
import { cn } from '@/lib/utils';
import { User2Icon } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';
import { Spicy_Rice } from 'next/font/google';
import Image from 'next/image';

const spicy_rice = Spicy_Rice({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-spicy_rice',
});



type Props = {
	params: { blog: string };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const slug = params.blog;
	const post = await getPost(slug);

	return {
		title: post?.title,
		description: post?.preview,
		keywords: [
			'Blog',
			'Restaurant',
			'Retail',
			'POS',
			'management',
			'operations',
		],
		icons: {
			icon: '/newLogo.png',
		},
		metadataBase: new URL('https://www.themanagerlife.com'),
		alternates: {
			canonical: '/',
			languages: {
				'en-US:': '/en-US',
			},
		},
	};
}

export default async function Blog({ params }: Props) {
	const slug = params.blog;
	const post = await getPost(slug);
	
	

	return (
		<main className="w-full mx-auto h-full">
			<div>
				<h1 className="text-5xl capitalize font-mono font-semibold text-chart-4">
					{post?.title}
				</h1>
			</div>
			<div className="flex flex-col md:flex-row md:justify-between md:items-center">
				<div className="py-2 md:w-1/2">
					{/* Author name and pic */}
					<div className="flex flex-row items-center gap-4 py-2">
						<Avatar>
							<AvatarImage
								src={`/${post?.authorName.authorImage}`}
								alt="Image of the Author"
							/>
							<AvatarFallback>
								<User2Icon />
							</AvatarFallback>
						</Avatar>
						<p>By</p>
						<p> {post?.authorName.authorName}</p>
					</div>
					{/* publicsh  */}
					<div className="flex flex-row items-center gap-4 py-2">
						<p>Published {'  '}</p>
						<p>
							{post?.createdAt.toLocaleDateString('en-su', {
								year: 'numeric',
								month: 'long',
							})}
						</p>
					</div>
					{/* like button */}
					<div>future like button</div>
					{/* intro */}
					<div className="p-4 w-full">
						<div className="text-xl text-left md:text-2xl md:text-justify">
							{post?.intro && (
								<div className="py-6">
									{' '}
									<div>
										<p className="text-3xl italic font-mono">Intro</p>
									</div>
									<div className="py-4">{post?.intro}</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className="md:w-1/2">
					{post?.image && (
						<Image
							src={post?.image}
							alt={post?.imageAlt}
							width={500}
							height={500}
							className="object-cover rounded-2xl shadow-2xl"
						/>
					)}
				</div>
			</div>

			{/* headline 1 */}
			{post?.Headline1 && (
				<div className="bg-accent p-8 md:p-16">
					<h3
						className={`${spicy_rice.variable} font-spicy_rice text-2xl md:text-6xl text-center italic`}
					>
						{post?.Headline1}
					</h3>
				</div>
			)}

			{/* heading 1 */}
			{post?.heading1 && (
				<div className="py-6">
					<h2 className="text-4xl italic font-mono">{post?.heading1}</h2>
				</div>
			)}
			{/* content 1 */}
			<div className="text-xl text-left md:text-2xl md:text-justify">
				{post?.content1.map((content1, idx) => (
					<div key={idx} className="">
						<p className="">{content1}</p>
						<br></br>
					</div>
				))}
			</div>
			{/* image 2 */}
			<div>
				{post?.image2 && (
					<Image
						src={post?.image2}
						//@ts-expect-error
						alt={post?.imageAlt2}
						width={500}
						height={500}
						className=" object-cover rounded-2xl shadow-2xl m-8 mx-auto md:float-left md:mr-4 max-h-96"
					/>
				)}
			</div>

			{/* heading 2 */}
			{post?.heading2 && (
				<div className="py-6">
					<h2 className="text-4xl italic font-mono">{post?.heading2}</h2>
				</div>
			)}
			{/* content 2 */}
			<div className="text-xl text-left md:text-2xl md:text-justify">
				{post?.content2.map((content, idx) => (
					<div key={idx} className="">
						<p className="">{content}</p>
						<br></br>
					</div>
				))}
			</div>

			{/* headline 2 */}
			{post?.Headline2 && (
				<div className="bg-accent p-8 md:p-16">
					<h3
						className={`${spicy_rice.variable} font-spicy_rice text-2xl md:text-6xl text-center italic`}
					>
						{post?.Headline2}
					</h3>
				</div>
			)}
			{/* heading 3 */}
			{post?.heading3 && (
				<div className="py-6">
					<h2 className="text-4xl italic font-mono">{post?.heading3}</h2>
				</div>
			)}
			{/* content 3 */}
			<div className="text-xl text-left md:text-2xl md:text-justify">
				{post?.content3.map((content, idx) => (
					<div key={idx} className="">
						<p className="">{content}</p>
						<br></br>
					</div>
				))}
			</div>

			{/* headline 3 */}
			{post?.Headline3 && (
				<div className="bg-accent p-8 md:p-16">
					<h3
						className={`${spicy_rice.variable} font-spicy_rice text-2xl md:text-6xl text-center italic`}
					>
						{post?.Headline3}
					</h3>
				</div>
			)}

			{/* image 3 */}
			<div>
				{post?.image3 && (
					<Image
						src={post?.image3}
						//@ts-expect-error
						alt={post?.imageAlt3}
						width={500}
						height={500}
						className=" object-cover rounded-2xl shadow-2xl m-8 mx-auto md:float-right md:ml-4"
					/>
				)}
			</div>

			{/* heading 4 */}
			{post?.heading4 && (
				<div className="py-6">
					<h2 className="text-4xl italic font-mono">{post?.heading4}</h2>
				</div>
			)}
			{/* content 4 */}
			<div className="text-xl text-left md:text-2xl md:text-justify">
				{post?.content4.map((content, idx) => (
					<div key={idx} className="">
						<p className="">{content}</p>
						<br></br>
					</div>
				))}
			</div>

			{/* headline 4 */}
			{post?.Headline4 && (
				<div className="bg-accent p-8 md:p-16">
					<h3
						className={`${spicy_rice.variable} font-spicy_rice text-2xl md:text-6xl text-center italic`}
					>
						{post?.Headline4}
					</h3>
				</div>
			)}

			{/* conclution */}
			<div className="text-xl text-left md:text-2xl md:text-justify indent-0 leading-normal tracking-normal m-0 break-after-all">
				{post?.conclusion && (
					<div className="py-6">
						<div className="py-4">
							<p className="text-3xl italic font-mono">Conclusion</p>
						</div>
						<p className="">{post.conclusion}</p>
						<br></br>
					</div>
				)}
			</div>
		</main>
	);
}
