import type { Metadata } from "next";
import Resea

type Props = {
  params: Promise<{ research: string }>;
};

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slugg = (await params).research;

  //Find the current Project
  const project = ProjectsContent.find(project => project.projectBox.slug === slugg);
  const title = project ? project.projectBox.name : "404"
  const description = project && project.detailsHeroContent.herotext
  const image = project ? project.projectBox.opengraph.src: ""
  console.log(image)


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
