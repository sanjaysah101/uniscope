import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import { Suspense } from "react";
import { AccessibilityProvider } from "@/components/accessibility-provider";
import { AuthProvider } from "@/components/auth-provider";
import { ChatWidget } from "@/components/chat-widget";
import { SkipLink } from "@/components/skip-link";
import "./globals.css";
import { Header } from "../components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uniscope - Your Complete Guide to Higher Education",
  description:
    "Compare universities, connect with students, and make informed educational decisions with AI-powered guidance",
  keywords:
    "university comparison, college selection, higher education, student community, AI education assistant",
  authors: [{ name: "Uniscope Team" }],
  creator: "Uniscope",
  publisher: "Uniscope",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://uniscope.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Uniscope - Your Complete Guide to Higher Education",
    description:
      "Compare universities, connect with students, and make informed educational decisions with AI-powered guidance",
    url: "https://uniscope.vercel.app",
    siteName: "Uniscope",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Uniscope - Educational Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uniscope - Your Complete Guide to Higher Education",
    description:
      "Compare universities, connect with students, and make informed educational decisions",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://api.openai.com" />
        <meta name="theme-color" content="#16a34a" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SkipLink />
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            </div>
          }
        >
          <AccessibilityProvider>
            <AuthProvider>
              <Header />
              <main id="main-content">{children}</main>
              <ChatWidget />
            </AuthProvider>
          </AccessibilityProvider>
        </Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
