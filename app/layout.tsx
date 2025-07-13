import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Your Trusted Digital Marketing Partner | Scrybe",
  description: "Scrybe is a full service digital marketing agency delivering tailored strategies, compelling content, design, and campaign services that help businesses build trust and drive results across markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={` antialiased`}
        style={{ fontFamily: "Graphik, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
