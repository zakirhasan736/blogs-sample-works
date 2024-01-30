import type { Metadata } from "next";
import "./globals.css";
import "@/styles/css/main.css";
import { Urbanist, Inter } from "next/font/google";
import Head from "next/head";
import React from "react";

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
	title: "Home Page",
	description:
		"Particular is a digital agency focused on strategy, design and advertising. Our mission is to develop brands that are bold, powerful and unforgettable. Our specialities include Web Development & Design, SEO, PPC, Copywriting and Ad campaigns.",
	icons: { icon: "/images/favicon.png", apple: "/images/favicon.png" },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${inter.variable} ${urbanist.variable}`}>
			<Head>
				{/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KSLS5JR5');
            `,
					}}
				/>

				{/* Google Analytics */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-5VRY1RRCR1"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5VRY1RRCR1');
            `,
					}}
				/>

				{/* Hotjar */}
				<script
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
			</Head>

			<body className="pca-marketing-page-body md:border-0">
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-KSLS5JR5"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}></iframe>
				</noscript>
				<main>{children}</main>
			</body>
		</html>
	);
}
