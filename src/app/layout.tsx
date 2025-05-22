import "./globals.css";
import { Navbar } from "@/components/layouts/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { Toaster } from "sonner";
import { constructMetadata } from "@/lib/metadata";
import Script from "next/script";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-right" />

        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nexoia",
              url: "https://same-54i240909ix-latest.netlify.app",
              logo: "https://same-54i240909ix-latest.netlify.app/logo.png",
              description:
                "Soluções de inteligência artificial e consultoria personalizada para transformar sua empresa.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+5534984048720",
                contactType: "customer service",
                availableLanguage: "Portuguese",
              },
              sameAs: [
              //   "https://www.youtube.com/enthusconsulting",
              //   "https://www.instagram.com/enthusconsulting",
              ],
            }),
          }}
        />

        {/* Structured Data for Service */}
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Consultoria em Inteligência Artificial",
              provider: {
                "@type": "Organization",
                name: "NexoIa",
              },
              description:
                "Serviços de consultoria, treinamento e implementação de soluções de inteligência artificial para empresas.",
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                price: "0",
                priceCurrency: "BRL",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
