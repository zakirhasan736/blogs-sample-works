import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
import "@/styles/css/main.css";
import React from "react";
import Script from "next/script";

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
    <html lang="en">
      <body className="pca-marketing-page-body md:border-0">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSLS5JR5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <script
          type="text/javascript"
          src="https://cdn.weglot.com/weglot.min.js"
        ></script>
        <Script
          id="weglot"
          dangerouslySetInnerHTML={{
            __html: `
                Weglot.initialize({ api_key: 'wg_d0f282972e7486231b9d5518409b11344' });
              `,
          }}
        />
        <main>{children}</main>
        <GoogleTagManager gtmId="GTM-KSLS5JR5" />
        <GoogleAnalytics gaId="G-5VRY1RRCR1" />
        <GoogleAnalytics gaId="G-F2X0PS4KNB" />
        {/* Hotjar */}
        {/* <Script
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
        /> */}
        <Script
          id="analyticshotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                  (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
h._hjSettings={hjid:4997357,hjsv:6};
a=o.getElementsByTagName('head')[0];
r=o.createElement('script');r.async=1;
r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />

        <Script
          id="tagManager"
          strategy="afterInteractive"
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-F2X0PS4KNB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-F2X0PS4KNB');
            `,
          }}
        />
      </body>
    </html>
  );
}
