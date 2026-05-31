import type { Metadata } from "next";
import { Raleway, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "NoblePath CRO — Clinical Trial Partner in Türkiye",
  description:
    "Full-service CRO in Ankara, Türkiye. Phase I–IV trials across oncology, cardiovascular, CNS, metabolic, infectious disease, and immunology. 48-hour feasibility. TITCK regulatory expertise. Built for global sponsors.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NoblePath CRO — Clinical Trial Partner in Türkiye",
    description:
      "Full-service CRO in Ankara, Türkiye. Phase I–IV trials across oncology, cardiovascular, CNS, metabolic, infectious disease, and immunology. 48-hour feasibility. TITCK regulatory expertise.",
    url: siteUrl,
    siteName: "NoblePath CRO",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NoblePath CRO — Clinical Research Partner in Türkiye",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NoblePath CRO — Clinical Trial Partner in Türkiye",
    description:
      "Full-service CRO in Ankara, Türkiye. 48-hour feasibility. TITCK regulatory expertise. Built for global sponsors.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NoblePath CRO",
              description:
                "Full-service clinical research organization in Ankara, Türkiye. Phase I–IV clinical trials across oncology, cardiovascular, CNS, metabolic, infectious disease, and immunology.",
              url: siteUrl,
              telephone: "+905534255415",
              email: "info@noblepathcro.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ankara",
                addressCountry: "TR",
              },
              founder: {
                "@type": "Person",
                name: "Dilek Çoban",
              },
              sameAs: ["https://www.noblepathcro.com"],
            }),
          }}
        />
        <Script
          src="https://noblepath-chatbot.vercel.app/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
