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
import { Spicy_Rice } from 'next/font/google';
import { SessionProviderLib } from "@/lib/SessionProviderLib";


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


const spicy_rice = Spicy_Rice({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-spicy_rice',
});




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
		icon: '/newLogo.png',
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen pt-20`}
			>
				<SessionProviderLib>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<NavBar />
						{loginModal}
						<div className="container max-w-7xl mx-auto h-full pt-12 flex-grow">
							{children}
						</div>
					</ThemeProvider>
					<Toaster />
					<MainFooter />
				</SessionProviderLib>
			</body>
		</html>
	);
}
