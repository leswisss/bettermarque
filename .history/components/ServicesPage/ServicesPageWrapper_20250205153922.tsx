"use client";

import React, { useEffect } from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
import AboutText from "../ReUsables/AboutText";
import OurApproach from "../ReUsables/OurApproach";
import Services from "../ReUsables/Services";
import GetinTouch from "../ReUsables/GetinTouch";
import FAQSection from "../ReUsables/FAQSection";
import { ServiceHeroContent } from "@/utils";
import Lenis from "lenis";

const ServicesPageWrapper = () => {

  const text1 = "We help brands navigate growth and change, redefining strategies to align with their identity and goals. By uniting vision, culture, and messaging, we craft brands that resonate, engage, and succeed."

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
      <Navbar />
      <HeroSection content={ServiceHeroContent}/>
      <PaddingTop/>
      <AboutText textone={text1} />
      <OurApproach />
      <Services />
      <GetinTouch/>
      <FAQSection/>
    </>
  )
}

export default ServicesPageWrapper