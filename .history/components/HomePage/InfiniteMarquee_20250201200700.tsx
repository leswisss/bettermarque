"use client";

import React, { useRef, useEffect } from "react";
import I
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/HomePage/infinitemarquee.module.scss";

const InfiniteMarquee = () => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
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

    gsap.set(firstImage.current, { xPercent: xPercent });
    gsap.set(secondImage.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        <div ref={firstImage}>
          CABRIC ENGINEERING - <span></span>
        </div>
        <div ref={secondImage}>
          CABRIC ENGINEERING - <span></span>
        </div>
      </div>
    </div>
  );
};

export default InfiniteMarquee;
