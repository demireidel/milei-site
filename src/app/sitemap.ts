import type { MetadataRoute } from "next";

const BASE_URL = "https://javiermilei.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/vision", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/logros", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/reformas", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/futuro", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/mundo", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/archivo", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
