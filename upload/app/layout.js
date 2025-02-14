
import { QueryProvider } from './context/QueryClientProvider';
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from 'next/image';

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Aqua Properties | Top Real Estate Company in Dubai",
  description: "Top Real Estate Company in Dubai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon.webp" sizes="32x32" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
          <QueryProvider>{children}</QueryProvider>
        <Footer />
      </body>
    </html>
  );
}
