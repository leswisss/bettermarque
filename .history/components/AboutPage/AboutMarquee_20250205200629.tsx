"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import IMAGE from "../../styles/"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import styles from "../../styles/HomePage/infinitemarquee.module.scss";

const AboutMarquee = () => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const sliderRef = useRef(null);
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;
    gsap.set(firstImage.current, { xPercent });
    gsap.set(secondImage.current, { xPercent });
    xPercent += speed * directionRef.current; // Use directionRef's current property
    requestAnimationFrame(animation);
  };

  // Use useGSAP hook to handle gsap animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1,
        onUpdate: (e) => (directionRef.current = e.direction * -1), // Update directionRef's current property
      },
      x: "-150px",
    });
    requestAnimationFrame(animation);
  });

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        <div ref={firstImage} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.image__wrapper}>
              <Image fill quality={100} alt="Better Marque" src={IMAGE} />
            </div>
            <div className={styles.image__wrapper}>
              <Image fill quality={100} alt="Better Marque" src={IMAGE} />
            </div>
          </div>
          <span></span>
        </div>
        <div ref={secondImage} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.image__wrapper}>
              <Image fill quality={100} alt="Better Marque" src={IMAGE} />
            </div>
            <div className={styles.image__wrapper}>
              <Image fill quality={100} alt="Better Marque" src={IMAGE} />
            </div>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AboutMarquee;