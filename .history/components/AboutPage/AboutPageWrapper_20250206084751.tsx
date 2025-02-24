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
  const mainText = "We believe that every brand has its own story, voice, and vision. We focus on bringing out what makes your brand unique, helping you shape an identity that connects and resonates in your industry."

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
      <AboutText textone={}/>
    </>
  )
}

export default AboutPageWrapper