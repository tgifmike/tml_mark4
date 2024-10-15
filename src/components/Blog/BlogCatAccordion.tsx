import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';
import { getCatPosts } from '@/lib/db-utilites';
import { Button } from '../ui/button';

export async function BlogCatAccordion() {
    const techPosts = await getCatPosts('Technology');
		const foodSafetyPosts = await getCatPosts('Food Safety');
		const currentEventsPosts = await getCatPosts('Current Events');
		const operationsPosts = await getCatPosts('Operations');
		const POSPosts = await getCatPosts('POS');
		const PaymentsPosts = await getCatPosts('Payments');
    return (
			<div className='w-full'>
				<Accordion type="single" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>
							<div className="text-xl">Technology ({techPosts.length})</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul>
								{techPosts.map((post, idx) => (
									<Link className="flex" href={`/blogs/${post.slug}`}>
										<Button variant={'link'} className="text-lg italic">
											{post.title}
										</Button>
									</Link>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>
							<div className="text-xl">
								Food Safety ({foodSafetyPosts.length})
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul>
								{foodSafetyPosts.map((post, idx) => (
									<Link className="flex" href={`/blogs/${post.slug}`}>
										<Button variant={'link'} className="text-lg italic">
											{post.title}
										</Button>
									</Link>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>
							<div className="text-xl">POS ({POSPosts.length})</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul>
								{POSPosts.map((post, idx) => (
									<Link className="flex" href={`/blogs/${post.slug}`}>
										<Button variant={'link'} className="text-lg italic">
											{post.title}
										</Button>
									</Link>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4">
						<AccordionTrigger>
							<div className="text-xl">
								Operations ({operationsPosts.length})
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul>
								{operationsPosts.map((post, idx) => (
									<Link className="flex" href={`/blogs/${post.slug}`}>
										<Button variant={'link'} className="text-lg italic">
											{post.title}
										</Button>
									</Link>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5">
						<AccordionTrigger>
							<div className="text-xl">
								Current Events ({currentEventsPosts.length})
							</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul>
								{currentEventsPosts.map((post, idx) => (
									<Link className="flex" href={`/blogs/${post.slug}`}>
										<Button variant={'link'} className="text-lg italic">
											{post.title}
										</Button>
									</Link>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-6">
						<AccordionTrigger>
							<div className="text-xl">Payments ({PaymentsPosts.length})</div>
						</AccordionTrigger>
						<AccordionContent>
							<ul>
								{PaymentsPosts.map((post, idx) => (
									<Link className="flex" href={`/blogs/${post.slug}`}>
										<Button variant={'link'} className="text-lg italic">
											{post.title}
										</Button>
									</Link>
								))}
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		);
}
