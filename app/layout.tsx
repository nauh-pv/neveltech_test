import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased flex items-center justify-center w-[100vw] text-[14px] overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-500 scrollbar-track-gray-400">
        {children}
      </body>
    </html>
  );
}
