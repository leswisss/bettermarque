"use client";

import React from "react";
import Navbar from "../Navigation/Navbar";
import { HomeHeroContent } from "@/utils";
import HeroSection from "../ReUsables/HeroSection";
import Lenis from "lenis";

const HomePageWrapper = () => {

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2,
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
      <HeroSection content={HomeHeroContent} infinitemarquee />
    </>
  );
};

export default HomePageWrapper;
