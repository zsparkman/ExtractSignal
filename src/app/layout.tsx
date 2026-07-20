import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description =
  "Growth marketing that works both directions — lead generation, research and market intelligence on one side; advertising, design and advocacy on the other.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.extractsignal.com"),
  title: "ExtractSignal — Signal from noise",
  description,
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "ExtractSignal — Signal from noise",
    description,
    url: "https://www.extractsignal.com",
    siteName: "ExtractSignal",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "ExtractSignal — Signal from noise",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
