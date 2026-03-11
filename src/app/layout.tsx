import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akkiwebdev.in"),
  title: {
    default: "Akhil | Full Stack Developer",
    template: "%s | Akhil",
  },
  description: "Akhil is a Full Stack Web Developer specializing in React, Next.js, modern UI/UX design, and scalable web apps. Explore my creative portfolio, projects, and skills.",
  keywords: [
    "Akhil developer",
    "akkiwebdev.in",
    "Akhil Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Akhil" }],
  creator: "Akhil",
  openGraph: {
    title: "Akhil | Full Stack Developer",
    description: "Explore my creative portfolio, web development projects, and skills. Building seamless digital experiences with React and Next.js.",
    url: "https://akkiwebdev.in",
    siteName: "Akhil Portfolio",
    locale: "en_US",
    type: "website",
    images: "/icon.svg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhil | Full Stack Developer",
    description: "Explore my creative portfolio, web development projects, and skills. Building seamless digital experiences with React and Next.js.",
    creator: "@Akhil",
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          calistoga.variable,
        )}
      >
        <Providers>
          <Header />
          <div className="mx-auto flex max-w-3xl flex-col px-8">
            <main className="grow">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
