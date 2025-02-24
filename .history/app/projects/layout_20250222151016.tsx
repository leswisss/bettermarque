import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Better Marque® | Embrace Uniqueness",
  description: "Explore our case studies and see how we craft distinctive brands for architects, contractors, and realtors. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
