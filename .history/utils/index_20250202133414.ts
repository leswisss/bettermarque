import IMAGE from "../public/svg/testproject.svg"


export const NavMenu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Work",
    link: "/work",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Services",
    link: "/services",
  }
];

export const HomeHeroContent = {
  // buttonheadertext: "Get to know us",
  // // projectinfo: {
  // //   name: "Brinovo Urbano",
  // //   image: IMAGE,
  // //   aspectratio: "102.6/50"
  // // },
  linkbutton: {
    link: "/about",
    text: "Learn more about us",
    color: "black"
  },
  herotext: "Empowering Architects, Civil Engineers and Realtors with exceptional creative solutions designed to captivate and bring their unique visions to life."
}

// Data for the accordion items (5 items)
export const accordionData = [
  {
    id: 1,
    number: "01",
    title: "Prioritize Safety and Trust in Every Detail",
    content:
      "We understand that Architects, Civil Engineers, and Realtors need more than just compelling visuals—they need branding that reinforces their commitment to security and integrity. Every strategy we develop and every design we craft is anchored in these values.",
  },
  {
    id: 2,
    number: "02",
    title: "Align Every Decision with a Defining Idea",
    content:
      "What makes your brand indispensable? At Better Marque, we identify the central idea that drives your business—a vision that motivates your team and connects deeply with your audience. This becomes the compass guiding every creative and strategic decision.",
  },
  {
    id: 3,
    number: "03",
    title: "Amplify Your Vision Through Design",
    content:
      "Donec id elit non mi porta gravida at eget metus. Item three content.",
  },
  {
    id: 4,
    number: "04",
    title: "Accordion Item Four",
    content:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Item four content.",
  },
  {
    id: 5,
    number: "05",
    title: "Accordion Item Five",
    content: "Maecenas faucibus mollis interdum. Item five content.",
  },
];
