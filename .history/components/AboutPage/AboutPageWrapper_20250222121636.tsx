"use client";

import React, { useEffect } from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
import AboutText from "../ReUsables/AboutText";
import FAQSection from "../ReUsables/FAQSection";
import PaddingTop from "../ReUsables/PaddingTop";
import AboutBetterMarque from "./AboutBetterMarque";
import CoreValues from "./CoreValues";
import { MissionThreeeInfo, ServicesThreeeInfo } from "@/utils";
import { AboutHeroContent } from "@/utils";
import Lenis from "lenis";
import ThreeInfoSection from "../ReUsables/ThreeInfoSection";

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
    <Preloader setAnimation={setAnimationFinished} />
      <Navbar />
      <HeroSection content={AboutHeroContent}/>
      <PaddingTop/>
      <AboutText textone={mainText}/>
      <AboutBetterMarque/>
      <ThreeInfoSection content={MissionThreeeInfo}/>
      <CoreValues/>
      <ThreeInfoSection content={ServicesThreeeInfo}/>
      <FAQSection/>
    </>
  )
}

export default AboutPageWrapper