"use client";

import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import VideoPlayer from "../HomePage/VideoPlayer";
import IMAGE from "../../public/svg/testproject.svg";
import FallbackImage from "../../public/images/homevideo.jpg";
import ProjectBrief from "./ProjectBrief";
import PreImages from "./PreImages";
import OtherDetails from "./OtherDetails";
import PaddingTop from "../ReUsables/PaddingTop";
import Lenis from "lenis";

const DetailsPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

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
    },
  };

  const nextProjectContent = {
    
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
      <OtherDetails />
      <PreImages />
      <OtherDetails />
    </>
  );
};

export default DetailsPageWrapper;
