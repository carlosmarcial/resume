import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Carlos Marcial - Full-Stack Developer & Digital Artist",
  description: "Crypto artist and full-stack developer with $1M+ in NFT sales and 7+ years of coding experience. Bridging art and technology.",
  keywords: ["crypto art", "NFT", "full-stack developer", "digital artist", "blockchain", "web3"],
  authors: [{ name: "Carlos Marcial" }],
  openGraph: {
    title: "Carlos Marcial - Full-Stack Developer & Digital Artist",
    description: "Crypto artist and full-stack developer with $1M+ in NFT sales and 7+ years of coding experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
