import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elza's blog",
  description: "Personal website and blog of Elizabeth",
    icons: {
      icon: '/icon.png',
    },
  openGraph: {
    title: "Elza's blog",
    description: "Personal website and blog of Elizabeth",
    images: [
      {
        url: '/lizu.webp',
        width: 1200,
        height: 630,
        alt: 'Elizabeth',
      },
    ],
    type: 'website',
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Rosarivo:ital,wght@0,400;1,400&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        {children}
      </body>
    </html>
  );
}
