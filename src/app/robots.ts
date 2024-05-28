import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl =
    process.env.NEXT_PUBLIC_API_URL || "https://www.agency.byparticular.com/";
  return {
    rules: {
      userAgent: "*",
      allow: [
        "/",
        "/aboutus",
        "/articles",
        "/articles/how-much-does-a-website-cost-in-2024",
        "/articles/how-much-does-seo-cost-in-the-uk",
        "/articles/the-strategic-value-of-seo-for-business-leaders",
        "/articles/using-data-in-your-marketing",
        "/articles/what-do-marketing-agencies-do",
        "/case-studies",
        "/case-studies/ai-and-humanity",
        "/case-studies/hult-ib-school",
        "/case-studies/village-of-genal",
        "/case-studies/zenbase",
        "/contacts",
        "/faq",
        "/features/colour-craft",
        "/landing-pages",
        "/our-approach",
        "/our-approach/attention-to-detail",
        "/our-approach/free-thought",
        "/our-approach/pioneering",
        "/privacy-policy",
        "/portfolio",
        "/services",
        "/services/app-development",
        "/services/branding",
        "/services/motion-design",
        "/services/pay-per-click",
        "/services/seo-service",
        "/services/web-design-and-development",
        "/soulfullhealth",
        "/knightsacademy",
        "/metisse",
        "/burn-hard",
        "/cindycare",
        "/drjohntsagaris",
        "/terms-and-condition",
      ],
      disallow: "/private/",
    },
    sitemap: `${sitemapUrl}sitemap.xml`,
  };
}
