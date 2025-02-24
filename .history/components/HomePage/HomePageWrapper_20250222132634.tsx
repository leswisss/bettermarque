"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navigation/Navbar";
import { HomeHeroContent } from "@/utils";
import HeroSection from "../ReUsables/HeroSection";
import VideoPlayer from "./VideoPlayer";
import AboutText from "../ReUsables/AboutText";
import OurApproach from "../ReUsables/OurApproach";
import GuaranteePolicy from "./GuaranteePolicy";
import HomeProjects from "./HomeProjects";
import ThreeInfoSection from "../ReUsables/ThreeInfoSection";
import FAQSection from "../ReUsables/FAQSection";
import Services from "../ReUsables/Services";
import { ContactThreeeInfo } from "@/utils";
import Preloader from "../Navigation/Preloader";
import FallbackImage from "../../public/images/homevideo.jpg";
import Lenis from "lenis";
import PaddingTop from "../ReUsables/PaddingTop";

const HomePageWrapper = () => {
  const text1 =
    "Breaking conventions with bold creativity and an unyielding commitment to excellence, Better Marque redefines how brands connect and grow.";
  const text2 =
    "We don’t believe in cookie-cutter solutions, instead we partner with brands to craft bespoke identities and digital experiences that resonate and endure.";

  //Preloader stuff
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.5,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* <Preloader setAnimation={setAnimationFinished} /> */}
      {!animationFinished && <Preloader setAnimation={setAnimationFinished} />}
      
      <div style={animationFinished}>
        <Navbar animationFinished={animationFinished} />
        <HeroSection
          content={HomeHeroContent}
          infinitemarquee
          animationFinished={animationFinished}
        />
        <PaddingTop />
        <VideoPlayer src="/videos/homevideo.mp4" fallbackSrc={FallbackImage} />
        <AboutText textone={text1} texttwo={text2} />
        <OurApproach />
        <HomeProjects />
        <Services />
        <GuaranteePolicy />
        <ThreeInfoSection content={ContactThreeeInfo} />
        <FAQSection />
      <div/>
    </>
  );
};

export default HomePageWrapper;
