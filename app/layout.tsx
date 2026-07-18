import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pathankot.vercel.app'),
  title: {
    default: "Pathankot — Gateway to the Hills | Punjab, India",
    template: "%s | Pathankot City Portal",
  },
  description:
    "Discover Pathankot — Punjab's gateway to the Himalayas. Explore ancient temples, the Ranjit Sagar Dam, Nurpur Fort, local cuisine, and plan your perfect trip to this vibrant city at the crossroads of three states.",
  keywords: [
    "Pathankot tourism",
    "Gateway to Himalayas",
    "Ranjit Sagar Dam",
    "Mukteshwar Mahadev Temple",
    "Nurpur Fort",
    "Dalhousie base camp",
    "Pathankot hotels",
    "Pathankot travel guide",
    "Punjab tourism",
    "Pathankot city",
  ],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  appleWebApp: {
    title: "Pathankot",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "Pathankot — Gateway to the Hills | Punjab, India",
    description:
      "Explore Pathankot: ancient temples, scenic lakes, historic forts, and the perfect launchpad for Dalhousie, Dharamshala, and Kashmir.",
    type: "website",
    locale: "en_IN",
    siteName: "Pathankot City Portal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathankot — Gateway to the Hills",
    description: "Discover Punjab's northern gateway: heritage, nature & culture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schema for Pathankot City
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Pathankot",
    "description": "Gateway to the Himalayas, a city in Punjab, India known for its ancient temples, forts, and beautiful lakes.",
    "touristType": [
      "Nature Lovers",
      "Pilgrims",
      "History Buffs",
      "Adventure Seekers"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
