import type { Metadata } from "next";
import { ProjectsContent } from "@/projects";

type Props = {
  params: { project: string };
};

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slugg = params.project;

  //Find the current Project
  const project = ProjectsContent.find(project => project.projectBox.slug === slugg);
  const title = project ? project.projectBox.name : "404"
  const description = project && project.hero
  const image = project ? project.images[0].image.src : ""



  return {
    title: `${title} - DK Architecture & Design`,
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
