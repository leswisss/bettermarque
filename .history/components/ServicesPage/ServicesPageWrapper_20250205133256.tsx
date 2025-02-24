"use  client";

import React, {useEffect} from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
import { ServiceHeroContent } from "@/utils";
import Lenis from "lenis";

const ServicesPageWrapper = () => {

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
      <HeroSection content={ContactHeroContent} lenis={lenis} reference={contactRef}/>
    </>
  )
}

export default ServicesPageWrapper