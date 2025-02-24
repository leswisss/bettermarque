import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in touch - Better Marque® | Embrace Uniqueness",
  description: "We're here to help. Reach out and let's start the journey to create your impactful and lasting brand experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
