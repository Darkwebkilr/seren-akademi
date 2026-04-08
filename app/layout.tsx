import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seren Akademi | Profesyonel Eğitim ve Sertifika Programları",
  description: "Seren Akademi ile geleceğinizi şekillendirin. Online sınavlar, interaktif eğitim paneli ve uluslararası geçerli sertifikalarla kariyerinizde fark yaratın.",
  keywords: ["eğitim", "akademi", "sertifika", "online sınav", "kariyer", "uzmanlık", "seren akademi"],
  authors: [{ name: "Seren Akademi" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Seren Akademi | Geleceğin Eğitim Platformu",
    description: "Modern ve yenilikçi eğitim çözümleriyle hayallerinizdeki kariyere bir adım daha yaklaşın.",
    url: "https://serenakademi.com",
    siteName: "Seren Akademi",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-noise font-sans">
        <div className="mesh-gradient" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
