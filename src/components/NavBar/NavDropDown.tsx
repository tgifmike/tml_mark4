 'use client';

 import * as React from 'react';

 import { cn } from '@/lib/utils';

 import {
		NavigationMenu,
		NavigationMenuContent,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuList,
		NavigationMenuTrigger,
 } from '@/components/ui/navigation-menu';
 import { MenuIcon } from 'lucide-react';

 const components: { title: string; href: string; description: string }[] = [
		{
			title: 'Blogs',
			href: '/blog-home',
			description: 'See all of our blogs here. Search by category or by title.  You can also look a preview of each blog.',
		},
		{
			title: 'Games',
			href: '/games',
			description: 'Looking to have some fun? Check out our games.',
		},
		{
			title: 'Great Flicks',
			href: '/great-flicks',
			description:
				'Great movies involving restaurants, bars and retail establishments!',
		},
		{
			title: 'Good Reads',
			href: '/good-reads',
			description: 'Some good reads that have helped me though out my career and life.',
		},
		{
			title: 'About',
			href: '/about',
			description: 'About Us',
		},
		{
			title: 'Contact Us',
			href: '/contact',
			description: 'Drop us a line...',
		},
 ];

 export function NavDropDown() {
		return (
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							<MenuIcon />
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		);
 }

 const ListItem = React.forwardRef<
		React.ElementRef<'a'>,
		React.ComponentPropsWithoutRef<'a'>
 >(({ className, title, children, ...props }, ref) => {
		return (
			<li className="list-none">
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
 });
 ListItem.displayName = 'ListItem';
