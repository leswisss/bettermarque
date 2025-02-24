import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Better Marque® | Embrace Uniqueness",
  description: "We craft distinctive brand identities and digital experiences that enhance trust, visibility, and industry success. From strategy to design, we shape brands that stand apart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
