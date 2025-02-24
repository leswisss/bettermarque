"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/HomePage/infinitemarquee.module.scss";

const InfiniteMarquee = () => {
  const firstParagraph = useRef(null);
  const secondParagraph = useRef(null);
  const sliderRef = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-150px",
    });
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstParagraph.current, { xPercent: xPercent });
    gsap.set(secondParagraph.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className="m-sliderContainer">
      <div className="m-slider" ref={sliderRef}>
        <p ref={firstParagraph}>
          CABRIC ENGINEERING - <span></span>
        </p>
        <p ref={secondParagraph}>
          CABRIC ENGINEERING - <span></span>
        </p>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
