import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Better Marque® | Embrace Uniqueness",
  description: "From strategy to design, we craft brands that enhance trust, visibility, and industry success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
