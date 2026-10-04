export const SITE_URL = "https://enosxtech.vercel.app";
export const SITE_NAME = "Enosx Technologies";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/og-image.png`;

export function createPageHead(
  title: string,
  description: string,
  path: string,
  type: "website" | "article" = "website",
) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Enosx Technologies, Kenya technology company, AI software, web development, e-commerce, developer tools",
      },
      { property: "og:type", content: type },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: SOCIAL_IMAGE_URL },
      { property: "og:image:alt", content: `${SITE_NAME} — practical software from Kenya` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SOCIAL_IMAGE_URL },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
