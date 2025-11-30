"use client";

import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Navigation/Navbar";
import { ResearchHeroContent } from "@/utils";
import Preloader from "../Navigation/Preloader";
import HeroSection from "../ReUsables/HeroSection";
import PaddingTop from "../ReUsables/PaddingTop";
import ThreeInfoSection from "../ReUsables/ThreeInfoSection";
import { ContactThreeeInfo } from "@/utils";
import Lenis from "lenis";
import Footer from "../Navigation/Footer";
import ResearchContainer from "./ResearchContainer";

const ResearchPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  //Preloader stuff
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1,
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

      <div
        style={{
          height: !animationFinished ? "100vh" : "",
          overflow: !animationFinished ? "hidden" : "",
        }}
      >
        <Navbar animationFinished={animationFinished} />
        <HeroSection
          content={ResearchHeroContent}
          lenis={lenis}
          reference={projectsRef}
          animationFinished={animationFinished}
        />
        <PaddingTop />
        <ResearchContainer ref={projectsRef} />
        <ThreeInfoSection content={ContactThreeeInfo} />
        <Footer />
      </div>
    </>
  );
};

export default ResearchPageWrapper;