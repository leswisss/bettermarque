"use client";

import React, { useEffect } from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
import AboutText from "../ReUsables/AboutText";
import FAQSection from "../ReUsables/FAQSection";
import PaddingTop from "../ReUsables/PaddingTop";
import AboutMarquee from "./AboutMarquee";
import { AboutHeroContent } from "@/utils";
import Lenis from "lenis";

const AboutPageWrapper = () => {

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
      <HeroSection content={AboutHeroContent}/>
      <PaddingTop/>
      <AboutMarquee/>
    </>
  )
}

export default AboutPageWrapper