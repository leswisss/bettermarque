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
  const homeAboutRef = useRef<HTMLDivElement> null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection content={HomeHeroContent} infinitemarquee />
      <VideoPlayer src="/videos/homevideo.mp4" fallbackSrc={FallbackImage}/>
    </>
  );
};

export default HomePageWrapper;
