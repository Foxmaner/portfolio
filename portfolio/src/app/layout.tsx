import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Sidebar from "./sidebar";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eskil Brännerud - Portfolio",
  description: "Eskil Brännerud's portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row max-w-full">
          <div className=" shadow-2xl w-full md:w-auto md:max-w-[400px]">
            <Sidebar />
          </div>
          <div className="md:min-w-3/4 w-full">
            {children}
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId="G-XW212JDW74" />
    </html>
  );
}
