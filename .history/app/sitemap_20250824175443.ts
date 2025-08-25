import { MetadataRoute } from "next"
import { ProjectsContent } from "@/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries: MetadataRoute.Sitemap = ProjectsContent.map((data) => ({
    url: `https://bettermarque.com/projects/${data.projectBox.slug}`
  }))

  return [
    {
      url: 'https://bettermarque.com',
      priority: 1
    },
    {
      url: 'https://bettermarque.com/about',
      priority: 0.7

    },
    {
      url: 'https://bettermarque.com/projects',
      priority: 0.9
    },
    {
      url: 'https://bettermarque.com/services',
      priority: 0.8
    },
    {
      url: 'https://bettermarque.com/contact',
      priority: 1
    },
    ...projectEntries
  ]
}