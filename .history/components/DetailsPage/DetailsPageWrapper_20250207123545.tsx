"use client";

import React, {useEffect, useState, useRef} from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
import IMAGE from "../public/svg/testproject.svg"
import Lenis from "lenis";

const DetailsPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  const DetailsHeroContent = {
    projectinfo: {
    name: "Brinovo Urbano",
    image: IMAGE,
    aspectratio: "102.6/50"
  },
  herotext: "Let’s get the conversation started. Send us a message below or reach out to us via email.",
  linkbutton: {
    text: "Send us a message",
    color: "black"
  }
}

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
      <Navbar />
      <HeroSection content={ContactHeroContent} lenis={lenis} reference={contactRef}/>
    </>
  )
}

export default DetailsPageWrapper