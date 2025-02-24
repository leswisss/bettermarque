"use client";

import React, {useEffect, useState, useRef} from "react";
import Navbar from "../Navigation/Navbar";
import { ProjectsHeroContent } from "@/utils";
import Preloader from "../Navigation/Preloader";
import HeroSection from "../ReUsables/HeroSection";
import PaddingTop from "../ReUsables/PaddingTop";
import ThreeInfoSection from "../ReUsables/ThreeInfoSection";
import ProjectsContainer from "./ProjectsContainer";
import { ContactThreeeInfo } from "@/utils";
import Lenis from "lenis";

const ProjectsPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  //Preloader stuff  
  const [animationFinished, setAnimationFinished] = useState(false);

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
    {!animationFinished && <Preloader setAnimation={setAnimationFinished} />}
    <Navbar animationFinished={animationFinished}/>
    <HeroSection content={ProjectsHeroContent} lenis={lenis} reference={projectsRef} animationFinished={animationFinished}/>
    <PaddingTop/>
    <ProjectsContainer ref={projectsRef} />
    <ThreeInfoSection content={ContactThreeeInfo}/>
    </>
  )
}

export default ProjectsPageWrapper