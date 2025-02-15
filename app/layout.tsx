import type { Metadata } from "next";
import logo from "@/public/icon/logo.svg";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import { Nunito, Raleway } from "next/font/google";

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={` ${nunito.variable} ${raleway.variable} antialiased bg-[#f7f8f4]  `}
      >
        {children}
      </body>
    </html>
  );
}
