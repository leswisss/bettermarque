"use client";

import React, { useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import { HomeHeroContent } from "@/utils";
import HeroSection from "../ReUsables/HeroSection";

const ProjectsPageWrapper = () => {

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
    <div>ProjectsPageWrapper</div>
  )
}

export default ProjectsPageWrapper