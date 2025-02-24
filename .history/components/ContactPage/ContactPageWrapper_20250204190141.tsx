"use client";

import React, {useEffect, useState, useRef} from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
import FormSection from "./FormSection";
import { ContactHeroContent } from "@/utils";
import Lenis from "lenis";


const ContactPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
      <HeroSection content={ContactHeroContent} lenis={lenis}/>
      <FormSection ref={contactRef}/>
    </>
  )
}

export default ContactPageWrapper