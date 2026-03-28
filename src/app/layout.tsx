import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "株式会社モア | Innovation for a Better World",
  description: "IT/SI/受託開発サービスを提供する株式会社モアの公式ウェブサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJP.variable} font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
