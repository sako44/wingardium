import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import logo from "@/public/icon/logo.svg";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WINGARDIUM",
  description:
    "bahçe, sera ve parsel gibi ekim yapılan alanlardaki tüm operasyonel süreçlerinizi tek bir platform üzerinden kolayca yönetebilmeniz için tasarlanmış kapsamlı bir web uygulamasıdır",
  icons: [{ rel: "icon", url: logo.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
