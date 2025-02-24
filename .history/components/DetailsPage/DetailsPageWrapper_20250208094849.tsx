"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import VideoPlayer from "../HomePage/VideoPlayer";
import IMAGE from "../../public/svg/testproject.svg";
import IMAGE2 from "../../public/images/ferrocore.jpg"
import FallbackImage from "../../public/images/homevideo.jpg";
import ProjectBrief from "./ProjectBrief";
import PreImages from "./PreImages";
import OtherDetails from "./OtherDetails";
import PaddingTop from "../ReUsables/PaddingTop";
import Lenis from "lenis";

const DetailsPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  
  //use useParams to extract the project params from our pathname
  const projectParams = useParams();
  const projectSlug = projectParams.project; 

  const DetailsHeroContent = {
    projectinfo: {
      name: "Brinovo Urbano",
      image: IMAGE,
      aspectratio: "102.6/50",
    },
    herotext:
      "Let’s get the conversation started. Send us a message below or reach out to us via email.",
    linkbutton: {
      text: "Read case study",
      color: "black",
    }
  };

  const nextProjectContent = {
    headerButton: "Next Project",
    projectDetails: {
      name: "Ferrocore Construction",
      link: "/projects/ferrocore-construction",
      image: IMAGE2
    }
  }

  const solutionContent = {
    headerButton: "Our Solution",
    detailData: {
      mainText: "We created a cohesive brand identity and an intuitive website for Brinovo Urbano, transforming how they connect with their audience.",
      secondaryText: "The brand identity established a strong, recognizable presence, while the website streamlined communication and showcased their projects effectively. This elevated their credibility, expanded their reach, and positioned them as leaders in sustainable urban development."
    }
  }

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.5,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection
        content={DetailsHeroContent}
        lenis={lenis}
        reference={detailsRef}
      />
      <PaddingTop />
      <div ref={detailsRef}>
        <VideoPlayer src="/videos/homevideo.mp4" fallbackSrc={FallbackImage} />
      </div>
      <ProjectBrief />
      <PreImages />
      <OtherDetails content={solutionContent}/>
      <PreImages />
      <OtherDetails content={nextProjectContent} />
    </>
  );
};

export default DetailsPageWrapper;
