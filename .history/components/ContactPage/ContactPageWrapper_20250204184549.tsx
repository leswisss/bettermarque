"use client";

import React, {useEffect} from "react";
import Navbar from '../Navigation/Navbar';
import HeroSection from '../ReUsables/HeroSection';
import { ContactHeroContent } from "@/utils";
import Lenis from "lenis";


const ContactPageWrapper = () => {
  // const [lenis, setLenis] = useState<Lenis | null>(null);
  // const homeVideoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.5,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // // Store the lenis instance in state
    // setLenis(lenisInstance);
  }, []);
  return (
    <>
      <Navbar />
    </>
  )
}

export default ContactPageWrapper