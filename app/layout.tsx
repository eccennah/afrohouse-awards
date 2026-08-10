import type { Metadata } from "next";
import { Hanken_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import ClientGuards from "./components/ClientGuards";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afro House Awards",
  description: "Celebrate the rhythm. Honor the heritage.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ClientGuards />
        {children}
      </body>
    </html>
  );
}
