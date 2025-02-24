import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in touch - Better Marque® | Embrace Uniqueness",
  description: "We're here to help. Get in touch let's embark on a journey to create impactful and enduring brand experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
