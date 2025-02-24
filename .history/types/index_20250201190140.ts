import { StaticImageData } from "next/image";

interface ProjectInfo {
  name: string;
  image: StaticImageData,
  aspectratio: string
}

interface LinkButton {
  link: string;
  text: string;
  color: string;
}

interface HomeHeroContentType {
  buttonheadertext?: string;
  projectinfo?: ProjectInfo;
  linkbutton: LinkButton;
  herotext: string;
}