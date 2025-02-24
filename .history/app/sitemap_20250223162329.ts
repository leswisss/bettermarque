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
      url: 'https://dkadstudio.com/about',
    },
    {
      url: 'https://dkadstudio.com/gallery',
    },
    {
      url: 'https://dkadstudio.com/projects',
    },
    {
      url: 'https://dkadstudio.com/services',
    },
    {
      url: 'https://dkadstudio.com/contact',
    },
    ...projectEntries
  ]
}