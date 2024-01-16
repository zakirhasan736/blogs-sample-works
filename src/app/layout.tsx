import type { Metadata } from 'next';
import './globals.css'

import { Urbanist, Inter} from "next/font/google";
import { Footer, Navbar } from '@/components';
import StickyNavbar from '@/components/navbar/sticky-navbar';
import { SpeedInsights } from "@vercel/speed-insights/next";
import React from "react";
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


const urbanist = Urbanist({ 
  subsets: ['latin'],
  variable: '--font-urbanist',
  display: 'swap',
})
export const metadata: Metadata = {
	title: "Home Page",
	description:
		"Particular is a digital agency focused on strategy, design and advertising. Our mission is to develop brands that are bold, powerful and unforgettable. Our specialities include Web Development & Design, SEO, PPC, Copywriting and Ad campaigns.",
	icons: { icon: "/images/favicon.png", apple: "/images/favicon.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html
			lang="en"
			className={`${inter.variable} ${urbanist.variable}`}>
			<body className="pca-marketing-page-body md:border-0">
				<Navbar />
				<StickyNavbar />
				<main className="pca-marketing-main-wraper">{children}</main>
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}
