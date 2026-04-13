import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yantrasalon.com"),
  title: "Yantra Salon — Exclusively for Women | Jodhpur",
  description:
    "Experience high-end luxury beauty, hair, skin, and bridal services at Yantra Salon — rated 4.9 stars. Exclusively for women in Jodhpur, Rajasthan.",
  keywords: [
    "Yantra Salon",
    "luxury salon Jodhpur",
    "women salon Rajasthan",
    "bridal makeup Jodhpur",
    "hair salon Jodhpur",
    "beauty parlour Jodhpur",
  ],
  openGraph: {
    title: "Yantra Salon — Exclusively for Women",
    description: "Premium luxury beauty salon for women. Rated 4.9 stars in Jodhpur, Rajasthan.",
    url: "https://yantrasalon.com",
    siteName: "Yantra Salon",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "Yantra Salon Jodhpur" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yantra Salon — Exclusively for Women",
    description: "Premium luxury beauty salon for women in Jodhpur, Rajasthan.",
    images: ["/hero.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      name: "Yantra Salon",
      description: "Exclusively for Women. Premium luxury salon in Jodhpur.",
      url: "https://yantrasalon.com",
      telephone: "+910291-243-3521",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jodhpur",
        addressRegion: "Rajasthan",
        addressCountry: "IN",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "966",
      },
      sameAs: ["https://www.instagram.com/yantrasalon"],
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#050505] text-[#FBFBFD] overflow-x-hidden">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
