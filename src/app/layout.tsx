import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julie Wenah | Civil Rights, Technology & Culture",
  description: "Julie M. Wenah is a global product leader, digital civil rights lawyer, tech executive, and filmmaker working at the intersection of law, technology, and storytelling.",
  keywords: ["Julie Wenah", "civil rights", "technology", "digital equity", "product leadership", "tech policy"],
  authors: [{ name: "Julie Wenah" }],
  openGraph: {
    title: "Julie Wenah | Civil Rights, Technology & Culture",
    description: "Working at the intersection of civil rights, technology, and culture to make sure equity is built into digital systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
