import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Brinivo  - Better Marque",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
