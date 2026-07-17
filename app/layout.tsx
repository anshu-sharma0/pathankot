import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pathankot City — Gateway to the Hills | Official City Portal",
  description:
    "Official Pathankot City portal — explore tourism, transit connections, citizen services, and the vibrant trade & economy of Punjab's gateway to the Himalayas.",
  keywords: [
    "Pathankot",
    "city portal",
    "Punjab",
    "tourism",
    "gateway to hills",
    "citizen services",
  ],
  openGraph: {
    title: "Pathankot City — Gateway to the Hills",
    description:
      "Explore the gateway city of Punjab: temples, transit, services, and trade.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
