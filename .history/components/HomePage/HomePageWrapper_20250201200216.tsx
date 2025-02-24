import React from "react";
import Navbar from "../Navigation/Navbar";
import { HomeHeroContent } from "@/utils";
import HeroSection from "../ReUsables/HeroSection";

const HomePageWrapper = () => {
  return (
    <>
      <Navbar />
      <HeroSection content={HomeHeroContent} infinitemarquee= />
    </>
  );
};

export default HomePageWrapper;
