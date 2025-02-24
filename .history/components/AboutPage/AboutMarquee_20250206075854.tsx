"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import IMAGE from "../../public/images/sparkler.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import styles from "../../styles/AboutPage/aboutmarquee.module.scss";

const AboutMarquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const sliderRef = useRef(null);
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  
  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement

  
  // Create separate refs for each image wrapper
  const imageWrapperRef1 = useRef(null);
  const imageWrapperRef2 = useRef(null);
  const imageWrapperRef3 = useRef(null);
  const imageWrapperRef4 = useRef(null);

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;
    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
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
    <div className={styles.aboutsliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        <div ref={firstText} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
          </div>
          <span></span>
        </div>
        <div ref={secondText} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AboutMarquee;
