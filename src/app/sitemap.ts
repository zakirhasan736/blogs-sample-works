import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const NEXT_PUBLIC_API_URL =
    process.env.NEXT_PUBLIC_API_URL || "https://www.agency.byparticular.com/";
  return [
    {
      url: NEXT_PUBLIC_API_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}aboutus`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}articles/how-much-does-a-website-cost-in-2024`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}articles/how-much-does-seo-cost-in-the-uk`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}articles/the-strategic-value-of-seo-for-business-leaders`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}articles/using-data-in-your-marketing`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}articles/what-do-marketing-agencies-do`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}contacts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}faq`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}features/colour-craft?colors=000000-ffffff-4685ff-f2f2f2-ffb084`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}landing-pages`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}our-approach`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}our-approach/attention-to-detail`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}our-approach/free-thought`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}our-approach/pioneering`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}services`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}services/app-development`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}services/branding`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}services/motion-design`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}services/pay-per-click`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}services/seo-service`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}services/web-design-and-development`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}terms-and-condition`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
    {
      url: `${NEXT_PUBLIC_API_URL}robots.txt`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];
}
