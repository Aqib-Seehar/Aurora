import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for that clean, premium look
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aurora - Think Better",
  description: " Aurora app landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-black text-white antialiased selection:bg-purple-500/30">
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 flex flex-col items-center w-full">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
