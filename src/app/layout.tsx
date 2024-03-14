import Head from "next/head";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import "@/styles/css/main.css";
import { Urbanist, Inter } from "next/font/google";
import React from "react";
import Script from "next/script";
 
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const urbanist = Urbanist({
	subsets: ["latin"],
	variable: "--font-urbanist",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Particular Agency | Digital Marketing Agency in London",
	description:
		"Particular is a London-based digital marketing agency. We are 100% customer-focused, We believe that a high quality experience for your customer is sureproof long-term marketing solution",
	icons: { icon: "/images/favicon.png", apple: "/images/favicon.png" },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable} ${urbanist.variable}`}>
			<body className="pca-marketing-page-body md:border-0">
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-KSLS5JR5"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}></iframe>
				</noscript>
				<main>{children}</main>
				<GoogleTagManager gtmId="GTM-KSLS5JR5" />
				<GoogleAnalytics gaId="G-5VRY1RRCR1" />
				{/* Hotjar */}
				<Script
				id="analyticshotjar"
					strategy="afterInteractive"
					dangerouslySetInnerHTML={{
						__html: `
                (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3837364,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
					}}
				/>
			</body>
		</html>
	);
}
