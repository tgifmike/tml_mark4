import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import NavBar from "@/components/NavBar/page";
import { ThemeProvider } from "@/components/Theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import MainFooter from "@/components/Footer/MainFooter";
import { Inter } from 'next/font/google';
import { cn } from "@/lib/utils";
import { SessionProviderLib } from "@/lib/SessionProviderLib";
import NextBreadcrumb from "@/components/BreadCrumbs/NextBreadCrumbs";
import { RxHome } from "react-icons/rx";
import FacebookFollowMe from "@/components/FollowMe/FacebookFollowMe";
import TwitterFollowMe from "@/components/FollowMe/TwitterFollowMe";
import LinkedInFollowMe from "@/components/FollowMe/LinkedInFollowMe";
import { Analytics } from '@vercel/analytics/react';
import logo from '@/public/images/newLogo.png';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ['latin'] });


// const spicy_rice = Spicy_Rice({ subsets: [
// 	weight: ['400'],
// 	style: ['normal'],
// 	subsets: ['latin'],
// 	variable: '--font-spicy_rice',]
// });




export const metadata: Metadata = {
	title: 'The Manager Life',
	description:
		'Restaurant, Retail, Technology and Management blog. Your go-to resource for insights, tips, and strategies to elevate your establishment.',
	keywords: [
		'Blog',
		'Restaurant',
		'Retail',
		'Point of Salse (POS) Systems',
		'management',
		'Trivia',
		'operations',
		'games',
		'customer experience',
		'staff training',
		'Food Safety',
		'Cost Controls',
	],
	icons: {
		icon: '@/public/images/newLogo.png'
	},
	metadataBase: new URL('https://www.themanagerlife.com'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US:': '/en-US',
		},
	},
};

export default function RootLayout({
	children,
	loginModal,
}: Readonly<{
	children: React.ReactNode;
	loginModal: React.ReactNode;
}>) {
	return (
		<html lang="en" className={cn('antialiased', inter.className)}>
			<Head>
				<link rel="canonical" href="https://www.themanagerlife.com" />
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col max-h-screen pt-20`}
			>
				<SessionProviderLib>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<NavBar />

						<div className="container flex flex-col md:flex-row md:justify-between mt-0 max-w-7xl items-center mx-auto">
							<NextBreadcrumb
								homeElement={<RxHome className="text-xl md:text-2xl" />}
								separator={<span> | </span>}
								activeClasses="text-error hover:no-underline"
								containerClasses="flex"
								listClasses="hover:underline mx-2 font-bold"
								capitalizeLinks
							/>
							<div className="flex pr-4 pt-4 md:pt-10">
								<span className="mt-1 mr-4 italic text-chart-1 text-md font-mono font-semibold">
									Follow Us on...
								</span>
								<FacebookFollowMe />
								<TwitterFollowMe />
								<LinkedInFollowMe />
							</div>
						</div>

						{loginModal}

						<div className="container max-w-7xl mx-auto h-screen flex-grow">
							{children}
						</div>
						<Analytics />
					</ThemeProvider>
					<Toaster />
					<MainFooter />
				</SessionProviderLib>
			</body>
		</html>
	);
}
