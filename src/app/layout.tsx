import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-VG7H954TGW";
const CLARITY_ID = "xsnijjhcjk";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description =
  "Performance marketing in both directions: we find the buyers who are ready to act, and we make sure the ready-to-act buyers find you.";

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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
      <Script id="clarity-init" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");`}
      </Script>
    </html>
  );
}
