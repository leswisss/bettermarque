"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import { HomeHeroContent } from "@/utils";
import HeroSection from "../ReUsables/HeroSection";

const ProjectsPageWrapper = () => {
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
    <div>ProjectsPageWrapper</div>
  )
}

export default ProjectsPageWrapper