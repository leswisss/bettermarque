import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies - Better Marque® | Embrace Uniqueness",
  description: "Explore our case studies and see how we have made an impactenhancing visibility, building trust, and driving industry success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
