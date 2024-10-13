'use client';

import React, { ReactNode } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TBreadCrumbProps = {
	homeElement: ReactNode;
	separator: ReactNode;
	containerClasses?: string;
	listClasses?: string;
	activeClasses?: string;
	capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
	homeElement,
	separator,
	containerClasses,
	listClasses,
	activeClasses,
	capitalizeLinks,
}: TBreadCrumbProps) => {
	const paths = usePathname();
	const pathNames = paths.split('/').filter((path) => path);

	function capitalizeEachWord(str: string) {
		return str.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}

	return (
		<div className='pt-10'>
			<ul className={containerClasses}>
				<li className={listClasses}>
					<Link href={'/'}>{homeElement}</Link>
				</li>
				{pathNames.length > 0 && separator}
				{pathNames.map((link, index) => {
					let href = `/${pathNames.slice(0, index + 1).join('/')}`;
					let itemClasses =
						paths === href ? `${listClasses} ${activeClasses}` : listClasses;
					let itemLink = capitalizeLinks
						? link[0].toUpperCase() + link.slice(1, link.length)
						: link;
					itemLink = itemLink.replace(/-/g, ' ');
					itemLink = capitalizeEachWord(itemLink);

					return (
						<React.Fragment key={index}>
							<li className={itemClasses}>
								{itemLink === 'Blogs' ? (
									<Link href="/all-blogs">{itemLink}</Link>
								) : (
									<Link href={href}>{itemLink}</Link>
								)}
							</li>
							{pathNames.length !== index + 1 && separator}
						</React.Fragment>
					);
				})}
			</ul>
		</div>
	);
};

export default NextBreadcrumb;
