"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Sidebar from "@/components/sidebar/page";
import Navbar from "@/components/navbar/page";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");
  const isHomePage = pathname === "/";
  
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {!isAuthPage && !isHomePage && <Navbar />}
        {!isAuthPage && !isHomePage && <Sidebar />}
        <main
          className={`transition-all duration-300 ${
            !isAuthPage && !isHomePage ? "pt-[60px] md:pt-12" : ""
          }`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
