import type { MetadataRoute } from "next";
import data from "@/app/backend.json";

const BASE_URL = "https://www.scrybe.ae";

function safeDate(input?: string | number | Date) {
  const d = input ? new Date(input) : new Date();
  return Number.isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const blogUrls: MetadataRoute.Sitemap = (data.blogs ?? [])
    .map((blog: any) => {
      const slug = blog.slug ?? blog.id;
      if (!slug) return null;

      return {
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: safeDate(
          blog.updatedAt ?? blog.date ?? blog.createdAt
        ),
        changeFrequency: "monthly",
        priority: 0.6,
      };
    })
    .filter(Boolean) as MetadataRoute.Sitemap;

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: safeDate(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: safeDate(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: safeDate(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: safeDate(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: safeDate(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  return [...staticUrls, ...blogUrls];
}
