"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { ProjectsContent } from "@/projects";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import VideoPlayer from "../HomePage/VideoPlayer";
import Preloader from "../Navigation/Preloader";
import ProjectBrief from "./ProjectBrief";
import PreImages from "./PreImages";
import Footer from "../Navigation/Footer";
import OtherDetails from "./OtherDetails";
import PaddingTop from "../ReUsables/PaddingTop";
import Lenis from "lenis";

const DetailsPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const detailsRef = useRef<HTMLDivElement | null>(null);

  //Preloader stuff
  const [animationFinished, setAnimationFinished] = useState(false);

  //use useParams to extract the project params from our pathname
  const projectParams = useParams();
  const projectSlug = projectParams.project;

  //Filter out current Project using its slug
  const currentProject = projectSlug
    ? ProjectsContent.find((project) => project.projectBox.slug === projectSlug)
    : null;

  if (!currentProject) {
    notFound();
  }

  //Get the next project
  const nextProject = currentProject
    ? ProjectsContent[
        (ProjectsContent.indexOf(currentProject) + 1) % ProjectsContent.length
      ]
    : null;

  const nextProjectContent = {
    headerButton: "Next Project",
    projectDetails: {
      name: nextProject?.projectBox.name,
      link: `/projects/${nextProject?.projectBox.slug}`,
      image: nextProject?.projectBox.coverImage.image,
    },
  };

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
          content={currentProject.detailsHeroContent}
          lenis={lenis}
          reference={detailsRef}
          animationFinished={animationFinished}
        />
        <PaddingTop />
        <div ref={detailsRef}>
          <VideoPlayer
            src={currentProject.videoLink}
            fallbackSrc={currentProject.fallbackImage}
          />
        </div>
        <ProjectBrief content={currentProject.projectBrief} />
        <PreImages content={currentProject.preImages} />
        <OtherDetails content={currentProject.firstOtherDetail} />
        <PreImages content={currentProject.preImages2} />
        {currentProject.preImages3 && currentProject.secondOtherDetail && (
          <>
            <OtherDetails content={currentProject.secondOtherDetail} />{" "}
            <PreImages content={currentProject.preImages3} />
          </>
        )}
        <OtherDetails content={nextProjectContent} />
        <Footer />
      </div>
    </>
  );
};

export default DetailsPageWrapper;
