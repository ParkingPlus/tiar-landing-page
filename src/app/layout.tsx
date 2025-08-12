import { aptos } from "./font";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://tiar.ai"),
  title: {
    default:
      "TIAR.ai — Charging Station Management System (CMS) OCPP for Indonesia & Asia",
    template: "%s | TIAR",
  },
  description:
    "EV Charging Management Software and Charging Station Management System (CMS) based on OCPP 1.6, 2.0.1, and 2.1. Real-time monitoring, Dynamic Load Management, billing, analytics, and white-label for Indonesia & Asia.",
  openGraph: {
    type: "website",
    siteName: "TIAR",
    title:
      "TIAR.ai — Charging Station Management System (CMS) OCPP for Indonesia & Asia",
    description:
      "EV Charging Management Software and CMS compliant with OCPP 1.6, 2.0.1, and 2.1 for operators, fleets, and governments in Indonesia & Asia.",
    url: "https://tiar.ai",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TIAR.ai — Charging Station Management System (CMS) OCPP for Indonesia & Asia",
    description:
      "EV Charging Management Software and CMS with real-time monitoring, Dynamic Load Management, billing, analytics, and white-label.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${aptos.className} dark:bg-gray-900`}>
        <Script id="ld-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TIAR.ai",
            url: "https://tiar.ai",
            logo: "https://tiar.ai/favicon.ico",
            sameAs: [
              "https://www.linkedin.com/company/tiar-ai"
            ]
          })}
        </Script>
        <Script id="ld-website" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://tiar.ai",
            name:
              "TIAR.ai — Charging Station Management System (CMS) OCPP for Indonesia & Asia",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://tiar.ai/search?q={query}",
              "query-input": "required name=query"
            }
          })}
        </Script>
        {/* Skip to content for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black shadow"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
