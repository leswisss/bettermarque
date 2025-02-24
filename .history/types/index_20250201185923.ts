import { StaticImageData } from "next/image";

interface ProjectInfo {
  name: string;
  image: StaticImageData
}

interface LinkButton {
  link: string;
  text: string;
  color: string;
}

interface HomeHeroContentType {
  projectState: boolean;
  buttonheaderState: boolean;
  buttonheadertext?: string;
  projectinfo?: ProjectInfo;
  linkbutton: LinkButton;
  herotext: string;
}