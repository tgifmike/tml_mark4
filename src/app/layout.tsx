import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import NavBar from "@/components/NavBar/page";
import { ThemeProvider } from "@/components/Theme/theme-provider";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang="en">
			<Head>
				<link rel="canonical" href="https://www.themanagerlife.com" />
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen pt-20`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NavBar />
					<div className="container max-w-7xl mx-auto h-full pt-12">
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
