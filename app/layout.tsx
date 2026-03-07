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
  title: "City General Hospital | Best Healthcare Services",
  description: "City General Hospital provides exceptional medical care with state-of-the-art facilities, experienced doctors, and compassionate healthcare services 24/7.",
  keywords: "hospital, healthcare, medical, emergency, doctors, cardiology, neurology, pediatrics, surgery",
  openGraph: {
    title: "City General Hospital | Best Healthcare Services",
    description: "Providing exceptional medical care with state-of-the-art facilities",
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
        {children}
      </body>
    </html>
  );
}
