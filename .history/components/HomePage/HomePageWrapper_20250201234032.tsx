"use client";

import React, {useEffect} from "react";
import Navbar from "../Navigation/Navbar";
import { HomeHeroContent } from "@/utils";
import HeroSection from "../ReUsables/HeroSection";
import VideoPlayer from "./VideoPlayer";
import FallbackImage from "../../public/images/homevideo.jpg"
import Lenis from "lenis";

const HomePageWrapper = () => {
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
      <VideoPlayer src="/public/videos/homevideo.mov" fallbackSrc={FallbackImage}/>
    </>
  );
};

export default HomePageWrapper;
