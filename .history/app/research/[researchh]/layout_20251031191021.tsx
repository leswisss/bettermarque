import type { Metadata } from "next";
import { ResearchContent } from "@/research";

type Props = {
  params: Promise<{ researchh: string }>;
};

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slugg = (await params).research;

  //Find the current Project
  const project = ResearchContent.find(project => project.projectBox.slug === slugg);
  const title = project ? project.projectBox.name : "404"
  const description = project && project.detailsHeroContent.herotext
  const image = project ? project.projectBox.opengraph.src: ""


  return {
    title: `${title} - Better Marque® | Embrace Uniqueness`,
    description: description,
    openGraph: {
      images: [
        {
          url: image
        }
      ]
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
