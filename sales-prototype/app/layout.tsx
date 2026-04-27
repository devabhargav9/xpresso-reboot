import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "X'Presso — One platform for the institution (Sales Prototype)",
  description:
    "One connected platform for teaching, research, student and campus operations, and shared services—explore the product map and full scope.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`min-h-screen ${inter.className}`}>
        <SiteHeader />
        <main className="pb-20">{children}</main>
        <footer className="border-t border-slate-200/80 bg-white/60 py-6 text-center text-xs text-slate-500">
          <span className="text-slate-600">
            One platform for the institution&rsquo;s operations, learning, and knowledge
          </span>
        </footer>
      </body>
    </html>
  );
}
