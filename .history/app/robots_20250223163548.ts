import { MetadataRoute } from "next";
import { userAgent } from "next/server";

export default function robots():M{
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      }
    ],
    sitemap: "https://dkadstudio.com/sitemap.xml"
  }
}