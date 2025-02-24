import IMAGE from "../public/svg/testproject.svg"
import IMAGE5  from "../public/images/homevideo.jpg"
import IMAGE2  from "../public/images/ferrocore.jpg"
import IMAGE3  from "../public/images/vosswalker.jpg"
import IMAGE4  from "../public/images/dkad.jpg"


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
export const AccordionData = [
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
      "A strong brand doesn’t just tell; it shows. We infuse your forward-thinking goals into every element of your identity, creating a cohesive and impactful presence that resonates with clients and stakeholders alike.",
  },
  {
    id: 4,
    number: "04",
    title: "Build a Culture That Embodies Your Brand",
    content:
      "People stand behind what they help create. We work with you to define the pillars of your brand’s culture—its values, vision, and behaviors—empowering your team to become ambassadors for your mission both internally and externally.",
  },
  {
    id: 5,
    number: "05",
    title: "Design a Brand That Reflects Your Unique Identity",
    content: "By combining your vision with a deep understanding of your industry, we craft brands that don’t just look good but feel authentic and purposeful. With every design, we aim to create a lasting impact—one that drives measurable results, attracts like-minded collaborators, and positions your brand as a leader in its field.",
  },
];


export const ProjectsData = [
  {
    name: "Brinovo Urbano",
    slogan: "Redefining Urban Landscape Architecture",
    date: 2024,
    image: IMAGE5,
    link: "/projects"
  },
  {
    name: "Ferrocore Construction",
    slogan: "Redefining Urban Landscape Architecture",
    date: 2024,
    image: IMAGE2,
    link: "/projects"
  },
  {
    name: "VossWalker Estates",
    slogan: "Redefining Urban Landscape Architecture",
    date: 2024,
    image: IMAGE3,
    link: "/projects"
  },
  {
    name: "DK Architetcure & Design",
    slogan: "Redefining Urban Landscape Architecture",
    date: 2024,
    image: IMAGE4,
    link: "/projects"
  },
]

export const PolicyData = [
  {
    header: "Unmatched Quality",
    text: "We deliver the highest quality for every project, with exceptional results that exceed your expectations."
  }
]