import { MetadataRoute } from "next";
import { userAgent } from "next/server";

export default function robots():MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: []
      }
    ],
    sitemap: "https://dkadstudio.com/sitemap.xml"
  }
}