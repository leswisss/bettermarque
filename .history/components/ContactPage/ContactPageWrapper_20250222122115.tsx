"use client";

import React, {useEffect, useState, useRef} from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
import FormSection from "./FormSection";
import FAQSection from "../ReUsables/FAQSection";
import ContactInfo from "./ContactInfo";
import { ContactHeroContent } from "@/utils";
import Lenis from "lenis";


const ContactPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

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
      <Navbar //Preloader stuff  
  const [animationFinished, setAnimationFinished] = useState(false); />
      <HeroSection content={ContactHeroContent} lenis={lenis} reference={contactRef}/>
      <FormSection ref={contactRef}/>
      <ContactInfo/>
      <FAQSection/>
    </>
  )
}

export default ContactPageWrapper