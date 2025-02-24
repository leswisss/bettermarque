import type { Metadata } from "next";

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const locale = params.locale;
  const slugg = params.project;

  //Find the current Project
  const project = ProjectsContent.find(project => project.slug === slugg);
  const title = project ? project.name : "404"
  const description = project && locale === "en" ? project.introDescription.en : project && locale === "fr" ? project.introDescription.fr : "404"
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
