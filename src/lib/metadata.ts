import type { Metadata } from "next";

// Base URLs
export const siteConfig = {
  name: "Enthus Consulting",
  url: "https://same-54i240909ix-latest.netlify.app",
  description: "Soluções de inteligência artificial e consultoria personalizada para transformar sua empresa. Otimize processos, reduza custos e aumente a produtividade.",
  ogImage: "/og-image.jpg",
  authors: [{ name: "Enthus Consulting" }],
  creator: "Enthus Consulting",
  themeColor: "#1c29e9",
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "Inteligência Artificial",
      "IA",
      "Consultoria",
      "Treinamento",
      "Automação",
      "Chatbots",
      "Prompts Inteligentes",
      "GPT",
      "Chat GPT",
      "Negócios",
      "Produtividade",
      "Inovação",
      "Transformação Digital",
    ],
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@enthusconsulting",
    },
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    themeColor: siteConfig.themeColor,
    manifest: "/site.webmanifest",
  };
}
