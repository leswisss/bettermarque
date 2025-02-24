"use client";

import React, {useEffect, useRef, useState} from "react";
import Navbar from "../Navigation/Navbar";
import { HomeHeroContent } from "@/utils";
import HeroSection from "../ReUsables/HeroSection";
import VideoPlayer from "./VideoPlayer";
import FallbackImage from "../../public/images/homevideo.jpg"
import Lenis from "lenis";

const HomePageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const homeVideoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2,
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
      <HeroSection content={HomeHeroContent} infinitemarquee lenis={lenis}
        reference={homeVideoRef}/>
      <VideoPlayer src="/videos/homevideo.mp4" fallbackSrc={FallbackImage} ref/>
    </>
  );
};

export default HomePageWrapper;
