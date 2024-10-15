'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { DEFAULT_MAX_VERSION } from 'tls';
import Link from 'next/link';

const frameworks = [
	{
		value: 'next.js',
		label: 'Next.js',
	},
	{
		value: 'sveltekit',
		label: 'SvelteKit',
	},
	{
		value: 'nuxt.js',
		label: 'Nuxt.js',
	},
	{
		value: 'remix',
		label: 'Remix',
	},
	{
		value: 'astro',
		label: 'Astro',
	},
];

interface BlogProps {
	blog: {
		id: string;
		title: string;
		href: string;
	}[];
}

const NewSearchComp: React.FC<BlogProps> = ( { blog } ) => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

    return (
			<div className='flex gap-2'>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							className="w-full justify-between"
						>
							{value
								? blog.find((blogs) => blogs.href === value)?.title
								: 'Select Blog...'}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-full p-0">
						<Command>
							<CommandInput placeholder="Search Blog..." />
							<CommandList>
								<CommandEmpty>No Blog found.</CommandEmpty>
								<CommandGroup>
									{blog.map((blogs) => (
										<CommandItem
											key={blogs.id}
											value={blogs.href}
											onSelect={(currentValue) => {
												setValue(currentValue === value ? '' : currentValue);
												setOpen(false);
											}}
										>
											<Check
												className={cn(
													'mr-2 h-4 w-4',
													value === blogs.href ? 'opacity-100' : 'opacity-0'
												)}
											/>
											{blogs.title}
										</CommandItem>
									))}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
				<div>
					<Link
						href={value}
						className={cn(buttonVariants({ variant: 'default' }), '')}
					>
						{' '}
						Go to Blog
					</Link>
				</div>
			</div>
		);
}
export default NewSearchComp