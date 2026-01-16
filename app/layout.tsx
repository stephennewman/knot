import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Knot Today Massage | Palm Harbor, FL | Licensed Massage Therapy",
  description:
    "Experience relaxation and healing at Knot Today Massage in Palm Harbor, FL. Swedish, Therapeutic, Deep Tissue & Prenatal massage. Licensed therapist with 16+ years experience. Call or text (419) 953-8787.",
  keywords: [
    "massage therapy Palm Harbor",
    "massage Palm Harbor FL",
    "Swedish massage",
    "deep tissue massage",
    "therapeutic massage",
    "prenatal massage",
    "Knot Today Massage",
    "licensed massage therapist Florida",
  ],
  openGraph: {
    title: "Knot Today Massage | Palm Harbor, FL",
    description:
      "Experience relaxation and healing at Knot Today Massage. Swedish, Therapeutic, Deep Tissue & Prenatal massage by Stephanie, licensed therapist with 16+ years experience.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${pinyonScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
