'use client';

import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	MessageCirclePlus,
	MessageCircleQuestion,
	MessageCircleX,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';
import { Button, buttonVariants } from '../ui/button';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FormCommentProps {
	postId: string | undefined;
}

const CommentForm: FC<FormCommentProps> = ({ postId }) => {
	const { data: session, status } = useSession();
	const userName = session?.user?.name;
	const router = useRouter();
	const { toast } = useToast();

	const formSchema = z.object({
		comment: z.string().min(10, {
			message: 'Message must be at least 10 characters.',
		}),
		// userName: z.string(),
	});

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			comment: '',
			// postId: postId,
			// userEmail: session?.user?.email as string,
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.

		try {
			const res = fetch('/api/comment', {
				method: 'POST',
				body: JSON.stringify({
					values,
					postId: postId,
					userEmail: session?.user?.email,
					//userName: session?.user?.name
				}),
				headers: {
					'content-type': 'application/json',
				},
			});
			if ((await res).status === 200) {
				console.log('values' + values);
				toast({
					title: 'Success',
					description: (
						<div className="flex items-center">
							<MessageCirclePlus size={40} strokeWidth={1} />
							<p className="text-lg ml-2">Comment sucessfully saved!</p>
						</div>
					),
					variant: 'default',
				});
			}
			if ((await res).status === 500) {
				toast({
					title: 'Something Went Wrong',
					description: (
						<div className="flex items-center">
							<MessageCircleX size={40} strokeWidth={1} />
							<p className="text-lg ml-2">
								SERVER ERROR: Failed to save comment!
							</p>
						</div>
					),
					variant: 'destructive',
				});
			}
			if ((await res).status === 404) {
				toast({
					title: 'Something Went Wrong',
					description: (
						<div className="flex items-center">
							<MessageCircleQuestion size={40} strokeWidth={1} />
							<p className="text-lg ml-2">
								Resource Not Found: Failed save comment!
							</p>
						</div>
					),
					variant: 'destructive',
				});
			}

			form.reset();

			router.refresh();
			return false;
		} catch (err) {
			console.error('Err', err);
		}
	}

	return (
		<main className="w-full mx-auto p-4">
			<div className="md:w-1/2 mx-auto">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className=" flex justify-between items-center bg-accent p-8 rounded-3xl"
					>
						<FormField
							control={form.control}
							name="comment"
							render={({ field }) => (
								<FormItem className="w-full px-4">
									{/* <FormLabel>Message</FormLabel> */}
									<FormControl>
										<Textarea
											placeholder="Write a comment..."
											className="resize-none border-0 shadow-none outline-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{status === 'authenticated' ? (
							<Button
								type="submit"
								variant={'ghost'}
								className="border-0 shadow-none outline-none"
							>
								Comment
							</Button>
						) : (
							<div>
								<Link
									href="/login"
									className={cn(
										'pt-16 border-0 shadow-none active:border-0',
										buttonVariants({  })
									)}
								>
									Login to comment
								</Link>
							</div>
						)}
					</form>
				</Form>
			</div>
		</main>
	);
};

export default CommentForm;
