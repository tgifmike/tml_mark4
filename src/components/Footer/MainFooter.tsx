
import { SlSocialFacebook } from 'react-icons/sl';
import { SlSocialLinkedin } from 'react-icons/sl';
import { RiTwitterXLine } from 'react-icons/ri';

import Link from 'next/link';
import React from 'react';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

const MainFooter = () => {
	return (
		<main className="bg-primary p-10 mt-auto">
			<div className="p-4">
				<h4 className="font-mono text-center text-accent text-xl">
					The Manager Life
				</h4>
			</div>

			<div className="pb-4">
				<Separator className="" />
			</div>

			<div className="flex flex-row justify-between text-accent max-w-7xl mx-auto">
				<div className="flex flex-col items-start">
					<h5 className="text-md uppercase">Content</h5>
					<Link
						href="/"
						className={cn('', buttonVariants())}
					>
						<h6 className="lext-md capialize">Blogs</h6>
					</Link>
					<Link
						href="/good-reads"
						className={cn('', buttonVariants())}
					>
						<h6 className="lext-md capialize">Good Reads</h6>
					</Link>
					<Link
						href="/great-flicks"
						className={cn('', buttonVariants())}
					>
						<h6 className="lext-md capialize">Great Flicks</h6>
					</Link>
					<Link
						href="/"
						className={cn('', buttonVariants())}
					>
						<h6 className="lext-md capialize">Games</h6>
					</Link>
				</div>
				<div className="flex flex-col items-start">
					<h5 className="text-md uppercase">Resources</h5>
					<Link
						href="/about"
						className={cn('', buttonVariants())}
					>
						<h6 className="text-md capialize">About</h6>
					</Link>
					<Link
						href="/contact"
						className={cn('', buttonVariants())}
					>
						<h6 className="text-md capialize">Contact</h6>
					</Link>
					<Link
						href="/privacy"
						className={cn('', buttonVariants())}
					>
						<h6 className="text-md capialize">Privacy</h6>
					</Link>
					<Link
						href="/terms"
						className={cn('', buttonVariants())}
					>
						<h6 className="text-md capialize">Terms & Conditions</h6>
					</Link>
				</div>
				<div>
					<h5 className="text-md uppercase">Socials</h5>
					<div className="flex flex-col md:flex-row justify-between items-center gap-2">
						<Link
							href="https://www.facebook.com/people/The-Manager-Life/61558173504955/"
							className={buttonVariants({ size: 'icon' })}
						>
							<SlSocialFacebook className="text-xl" />
						</Link>
						<Link
							href="https://www.linkedin.com/company/the-manager-life/about/?viewAsMember=true"
							className={buttonVariants({ size: 'icon' })}
						>
							<SlSocialLinkedin className="text-xl" />
						</Link>
						<Link
							href="https://twitter.com/themanagerlife"
							className={buttonVariants({ size: 'icon' })}
						>
							<RiTwitterXLine className="text-xl" />
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MainFooter;
