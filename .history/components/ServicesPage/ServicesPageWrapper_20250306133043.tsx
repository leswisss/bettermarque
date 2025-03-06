"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import AboutText from "../ReUsables/AboutText";
import OurApproach from "../ReUsables/OurApproach";
import Preloader from "../Navigation/Preloader";
import Services from "../ReUsables/Services";
import ThreeInfoSection from "../ReUsables/ThreeInfoSection";
import FAQSection from "../ReUsables/FAQSection";
import PaddingTop from "../ReUsables/PaddingTop";
import { ContactThreeeInfo } from "@/utils";
import { ServiceHeroContent } from "@/utils";
import Lenis from "lenis";
import Footer from "../Navigation/Footer";

const ServicesPageWrapper = () => {
  const text1 =
    "We help brands navigate growth and change, redefining strategies to align with their identity and goals. By uniting vision, culture, and messaging, we craft brands that resonate, engage, and succeed.";

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
          content={ServiceHeroContent}
          animationFinished={animationFinished}
        />
        <PaddingTop />
        <AboutText textone={text1} />
        <OurApproach />
        <Services />
        <ThreeInfoSection content={ContactThreeeInfo} />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPageWrapper;
