"use client";

import React, {useEffect, useRef, useState} from "react";
import Navbar from "../Navigation/Navbar";
import { HomeHeroContent } from "@/utils";
import HeroSection from "../ReUsables/HeroSection";
import VideoPlayer from "./VideoPlayer";
import AboutText from "../ReUsables/AboutText";
import OurApproach from "../ReUsables/OurApproach";
import GuaranteePolicy from "./GuaranteePolicy";
import HomeProjects from "./HomeProjects";
import GetinTouch from "../ReUsables/GetinTouch";
import FAQSection from "../ReUsables/FAQSection";
import FallbackImage from "../../public/images/homevideo.jpg"
import Lenis from "lenis";

const HomePageWrapper = () => {
  // const [lenis, setLenis] = useState<Lenis | null>(null);
  // const homeVideoRef = useRef<HTMLDivElement>(null);

  const text1 = "Breaking conventions with bold creativity and an unyielding commitment to excellence, Better Marque redefines how brands connect and grow."
  const text2 = "We don’t believe in cookie-cutter solutions, instead we partner with brands to craft bespoke identities and digital experiences that resonate and endure."

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // // Store the lenis instance in state
    // setLenis(lenisInstance);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection content={HomeHeroContent} infinitemarquee />
      <VideoPlayer src="/videos/homevideo.mp4" fallbackSrc={FallbackImage}/>
      <AboutText textone={text1} texttwo={text2} />
      <OurApproach />
      <HomeProjects />
      <GuaranteePolicy />
      <GetinTouch />
      <FAQSection />
    </>
  );
};

export default HomePageWrapper;
