import PROJECT1 from "../public/svg/testproject.svg"
import PROJECT11 from "../public/images/homevideo.jpg"


export const ProjectDetails = [
  {
    id: 1,
    name: "Brinovo Urbano",
    slug: "brinovo-urbano",
    year: 2024,
    slogan: "Redefining Urban Landscape Architecture",
    services: "Strategy - Visual Identity - Website",
    coverImage: {
      image: PROJECT11,
      alt: "Project Brinovo Urbano"
    },
    detailsHeroContent: {
      projectinfo: {
        name: "Brinovo Urbano",
        image: PROJECT1,
        aspectratio: "102.6/50",
      },
      herotext:
        "Let’s get the conversation started. Send us a message below or reach out to us via email.",
      linkbutton: {
        text: "Read case study",
        color: "black",
      }
    },
    videoLink: "/videos/homevideo.mp4",
    fallbackImage: PROJECT11,
    projectBrief: {
      mainText: "Brinovo Urbano specializes in creating sustainable urban landscapes that redefine modern city living.",
      briefText: "As a forward-thinking firm, Brinovo Urbano prioritizes eco-conscious solutions that enhance urban ecosystems. They specialize in blending functionality and aesthetics, creating spaces that harmonize with the environment while meeting the needs of modern communities. Their commitment to sustainability ensures cities evolve responsibly, preserving ecological balance for future generations.",
      projectSpecs: [
        {
          heading: "Type",
          text: "Rebranding",
        },
        {
          heading: "Category",
          text: "Architecture",
        },
        {
          heading: "Services",
          text: "Strategy, Visual Identity, Messaging",
        }
      ],
      // livesiteLink: "https://www.bettermarque.com"
    },
    preImages: [
      {
        image: PROJECT11,
        aspectRatio: "16/9",
        alt: "Project Brinovo Urbano"
      },
      {
        image: PROJECT11,
        aspectRatio: "16/9",
        alt: "Project Brinovo Urbano"
      },
      {
        image: PROJECT11,
        aspectRatio: "16/9",
        alt: "Project Brinovo Urbano"
      }
    ],
    firstOtherDetail: {
      
    }

  }
]