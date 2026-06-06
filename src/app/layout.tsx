/**
 * Next (node modules)
 */
import type { Metadata } from "next";
import { JetBrains_Mono, VT323 } from "next/font/google";

/**
 * Styles
 */
import "./globals.css";

/**
 * Utils
 */
import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
});

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A journey through my life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", vt323.className)}>
      <body className="min-h-full flex flex-col">
        <main className="flex justify-center items-center h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
