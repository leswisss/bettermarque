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
    title: "Accordion Item One",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Item one content.",
  },
  {
    id: 2,
    number: "02",
    title: "Accordion Item Two",
    content:
      "Praesent commodo cursus magna, vel scelerisque nisl consectetur. Item two content.",
  },
  {
    id: 3,
    number: "03",
    title: "Accordion Item Three",
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
