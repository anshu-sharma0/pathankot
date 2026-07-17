import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
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
  verification: {
    google: "BSTxCHZKuqwPadxhQgoKaIYDVnBnDvHLA7TI_A1t2EI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
