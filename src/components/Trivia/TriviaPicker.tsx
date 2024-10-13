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
import Link from 'next/link';

const frameworks = [
	{
		value: '/trivia/cash-handling-trivia',
		label: 'Cash Handling Trivia',
	},
	{
		value: '/trivia/chef-quotes-trivia',
		label: 'Chef Quote Trivia',
	},
	{
		value: '/trivia/financial-terms-trivia',
		label: 'Financial Term Trivia',
	},
	{
		value: '/trivia/food-safety-trivia',
		label: 'Food Safety Trivia',
	},
	{
		value: '/trivia/history-of-POS-trivia',
		label: 'History of POS Trivia',
	},
	{
		value: '/trivia/restaurant-movie-trivia',
		label: 'Restaurant Movie Trivia',
	},
	{
		value: '/trivia/restaurant-term-trivia',
		label: 'Restaurant Term Trivia',
	},
	{
		value: '/trivia/mix-math-trivia',
		label: 'Mix & Match Trivia',
	},
];

export function TriviaPicker() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

    return (
			<main >
				<div className='flex gap-2'>
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger asChild>
							<Button
								variant="outline"
								role="combobox"
								aria-expanded={open}
								className="w-[200px] justify-between"
							>
								{value
									? frameworks.find((framework) => framework.value === value)
											?.label
									: 'Select Trivia Games...'}
								<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-[200px] p-0">
							<Command>
								<CommandInput placeholder="Search Trivia Games..." />
								<CommandList>
									<CommandEmpty>No framework found.</CommandEmpty>
									<CommandGroup>
										{frameworks.map((framework) => (
											<CommandItem
												key={framework.value}
												value={framework.value}
												onSelect={(currentValue) => {
													setValue(currentValue === value ? '' : currentValue);
													setOpen(false);
												}}
											>
												<Check
													className={cn(
														'mr-2 h-4 w-4',
														value === framework.value
															? 'opacity-100'
															: 'opacity-0'
													)}
												/>
												{framework.label}
											</CommandItem>
										))}
									</CommandGroup>
								</CommandList>
							</Command>
						</PopoverContent>
					</Popover>

					<Link
						href={value}
						className={cn(buttonVariants({ variant: 'default' }), '')}
					>
						{' '}
						Go to Trivia Game
					</Link>
				</div>
			</main>
		);
}
