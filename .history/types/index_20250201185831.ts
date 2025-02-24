import { StaticImageData } from "next/image";

interface ProjectInfo {
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
  projectinfo: ProjectInfos;
  linkbutton: LinkButton;
  herotext: string;
}