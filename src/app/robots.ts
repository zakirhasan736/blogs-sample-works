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
        "/contacts",
        "/faq",
        "/features/colour-craft?colors=000000-ffffff-4685ff-f2f2f2-ffb084",
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
