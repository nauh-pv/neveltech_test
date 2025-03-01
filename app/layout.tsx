import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/src/context/AppContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nevel Tech",
  description: "Nevel Tech Test3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex items-center justify-center w-full text-[14px] overflow-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-500 scrollbar-track-gray-400">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
