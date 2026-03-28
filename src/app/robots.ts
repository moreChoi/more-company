import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://example.com/sitemap.xml", // TODO: 실서버 도메인으로 변경
  };
}
