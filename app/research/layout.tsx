import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Case Studies - Better Marque® | Embrace Uniqueness",
  description: "A collection of research projects and experimental case studies by Better Marque. Detailed narratives showing challenges, hypotheses, visual solutions, and lessons learned from non-paid brand research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
