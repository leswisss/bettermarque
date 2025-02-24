import React from "react";
import Navbar from "../Navigation/Navbar";
import { HomeHeroContent } from "@/utils";
import HeroSection from "../ReUsables/HeroSection";

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

    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection content={HomeHeroContent} infinitemarquee />
    </>
  );
};

export default HomePageWrapper;
