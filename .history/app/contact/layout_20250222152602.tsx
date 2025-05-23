import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in touch - Better Marque® | Embrace Uniqueness",
  description: "we're here to help. Let's embark on a journey to create impactful and enduring brand experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
