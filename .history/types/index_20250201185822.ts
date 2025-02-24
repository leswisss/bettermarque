import { StaticImageData } from "next/image";

interface ProjectDetails {
  name: string;
  image: string; // Adjust the type if IMAGE is an actual image object or URL string
}

interface LinkButton {
  link: string;
  text: string;
  color: string;
}

interface HomeHeroContentType {
  projectState: boolean;
  buttonheaderState: boolean;
  buttonheadertext: string;
  projectinfo: ProjectDetails;
  linkbutton: LinkButton;
  herotext: string;
}