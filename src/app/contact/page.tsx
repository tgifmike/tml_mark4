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
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { MailCheck, MailQuestion, MailX } from 'lucide-react';

const Contact = () => {
	const { toast } = useToast();

	const formSchema = z.object({
		name: z.string().min(3, {
			message: 'Username must be at least 3 characters.',
		}),
		email: z.string().email({ message: 'Invalid email address' }),
		message: z.string().min(10, {
			message: 'Message must be at least 10 characters.',
		}),
	});

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		try {
			const res = fetch('/api/contact', {
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
		<div className="w-1/2 mx-auto pt-8">
			<h1 className="text-center text-4xl font-mono font-bold tracking-tight pb-4">
				We want to hear from you!
			</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input
										placeholder="Albus Percival Wulfric Brian Dumbledore"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Dumbledore@Hogwarts.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Drop us a line..."
										className="resize-none"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
};

export default Contact;
