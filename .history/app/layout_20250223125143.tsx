import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.scss";

const regular = localFont({
  src: "./fonts/SF-Pro-Display-Regular.ttf",
  variable: "--regular-font"
})

const medium = localFont({
  src: "./fonts/SF-Pro-Display-Medium.ttf",
  variable: "--medium-font"
})

const semibold = localFont({
  src: "./fonts/SF-Pro-Display-Semibold.ttf",
  variable: "--semibold-font"
})

const bold = localFont({
  src: "./fonts/SF-Pro-Display-Semibold.ttf",
  variable: "--semibold-font"
})

export const metadata: Metadata = {
  title: "Better Marque® - Branding Agency for Architects, Contractors & Realtors",
  description: "Better Marque is a branding and design agency dedicated to crafting impactful identities for Architects, Contractors, and Real Estate professionals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  className={`${regular.variable} ${medium.variable} ${semibold.variable}`}>
        {children}
      </body>
    </html>
  );
}
