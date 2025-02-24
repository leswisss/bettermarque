"use  client";

import React, {useEffect, useState, useRef} from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
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

    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);
  return (
    <>
    
    </>
  )
}

export default ServicesPageWrapper