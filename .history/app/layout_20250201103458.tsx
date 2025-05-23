import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";

const regular = localFont({
  src: "./fonts/SF-Pro-Display-Regular.ttf",
  variable: "--regular-font"
})

const sfpromedium = localFont({
  src: "./fonts/SF-Pro-Display-Medium.ttf",
  variable: "--medium-font"
})

const sfprosemibold = localFont({
  src: "./fonts/SF-Pro-Display-Semibold.ttf",
  variable: "--semibold-font"
})


export const metadata: Metadata = {
  title: "Better Marque - Branding Agency",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
