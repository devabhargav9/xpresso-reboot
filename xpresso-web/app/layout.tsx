import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xpresso.ai"),
  title: {
    default: "Xpresso — One platform for higher education",
    template: "%s · Xpresso",
  },
  description:
    "Xpresso is the integrated higher-ed platform for Indian institutions: institution management, education management, and adaptive learning — with Compliance Autopilot for NAAC, NIRF, NBA, AISHE, UGC and AICTE.",
  openGraph: {
    title: "Xpresso — One platform for higher education",
    description:
      "Replace your ERP, LMS, AI tutor, NAAC consultant and website agency with one product. Built for Indian higher education.",
    type: "website",
    siteName: "Xpresso",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
