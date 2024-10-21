'use client';

import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { MailCheck, MailQuestion, MailX } from 'lucide-react';

const NewsletterSignUp = () => {
	const { toast } = useToast();

	const formSchema = z.object({
		
		email: z.string().email({ message: 'Invalid email address' }),
		
	});

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			
			email: '',
			
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		//console.log(values);
		try {
			const res = fetch('/api/newsletter', {
				method: 'POST',
				body: JSON.stringify({
					values,
				}),
				headers: {
					'content-type': 'application/json',
				},
			});
			if ((await res).status === 200) {
				toast({
					title: 'Success',
					description: (
						<div className="flex items-center">
							<MailCheck size={40} strokeWidth={1} />
							<p className="text-lg ml-2">Email was sucessfully sent!</p>
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
							<MailX size={40} strokeWidth={1} />
							<p className="text-lg ml-2">SERVER ERROR: Failed to send!</p>
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
							<MailQuestion size={40} strokeWidth={1} />
							<p className="text-lg ml-2">
								Resource Not Found: Failed to send!
							</p>
						</div>
					),
					variant: 'destructive',
				});
			}

			form.reset();
			return false;
		} catch (err) {
			console.error('Err', err);
		}
	}

    return (
			<main className='p-8'>
				<div className="w-1/2 mx-auto p-10 border-border border-1 rounded-2xl shadow-2xl bg-accent">
					<h2 className="text-center text-4xl font-mono font-bold tracking-tight pb-4">
						Join our Newsletter
					</h2>
					<p className="text-center text-lg">
						Be the first to see new content!
					</p>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder="Dumbledore@Hogwarts.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<div className="flex flex-col items-end">
								<p className="text-sm italic">
									No Spam, we are not fans either!
								</p>
								<Button
									type="submit"
									className="px-6"
									variant={'outline'}
									size={'lg'}
								>
									Join
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</main>
		);
};

export default NewsletterSignUp;
