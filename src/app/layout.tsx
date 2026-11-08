
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khoresports.com"),
  title: {
    default: "KhoR Esports | Built to Compete",
    template: "%s | KhoR Esports",
  },
  description:
    "KhoR is an independent esports organization built around competition, community, and growth. Discover KHOR VALORANT.",
  applicationName: "KhoR Esports",
  openGraph: {
    title: "KhoR Esports",
    description:
      "An independent esports organization built to compete.",
    siteName: "KhoR Esports",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KhoR Esports",
    description:
      "An independent esports organization built to compete.",
  },
  icons: {
    icon: "/branding/khor-emblem.png",
    apple: "/branding/khor-emblem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
