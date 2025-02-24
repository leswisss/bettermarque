"use client";

import React, { useEffect } from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
import AboutText from "../ReUsables/AboutText";
import { ServiceHeroContent } from "@/utils";
import Lenis from "lenis";

const ServicesPageWrapper = () => {

  const text1 = ""
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
      <AboutText textone={text1} />
    </>
  )
}

export default ServicesPageWrapper