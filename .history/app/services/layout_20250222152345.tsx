import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding Services - Better Marque® | Embrace Uniqueness",
  description: "Better Marque is a premier branding agency. We offer comprehensive branding services, including Brand Strategy, Brand Identity, Digital Presence, and Video Production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
