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
  const rotationSpeedRef = useRef(1); // For adjusting rotation speed dynamically
  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement
  const rotationSpeed = -25; // Base rotation speed

  
  // Create separate refs for each image wrapper
  const imageWrapperRef1 = useRef(null);
  const imageWrapperRef2 = useRef(null);
  const imageWrapperRef3 = useRef(null);
  const imageWrapperRef4 = useRef(null);

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    // Apply rotation based on the scroll movement for each image wrapper
    const rotationValue = xPercent * rotationSpeedRef.current;

    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });

    // Apply rotation based on the scroll movement for each image wrapper
    if (imageWrapperRef1.current) {
      gsap.set(imageWrapperRef1.current, {
        rotation: rotationValue,
        transformOrigin: "center center", // Ensure the rotation is around the center
      });
    }

    if (imageWrapperRef2.current) {
      gsap.set(imageWrapperRef2.current, {
        rotation: rotationValue,
        transformOrigin: "center center", // Ensure the rotation is around the center
      });
    }

    if (imageWrapperRef3.current) {
      gsap.set(imageWrapperRef3.current, {
        rotation: rotationValue,
        transformOrigin: "center center", // Ensure the rotation is around the center
      });
    }

    if (imageWrapperRef4.current) {
      gsap.set(imageWrapperRef4.current, {
        rotation: rotationValue,
        transformOrigin: "center center", // Ensure the rotation is around the center
      });
    }


    xPercent += speed * directionRef.current; // Use directionRef's current property
    // rotationValue = rotationSpeed * directionRef.current
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
      onUpdate: (e) => {directionRef.current = e.direction * -1; rotationSpeedRef.current = e.direction * rotationSpeed} // Dynamically change rotation speed), // Update directionRef's current property
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
              <div className={styles.image__wrapper} ref={imageWrapperRef1}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper} ref={imageWrapperRef2}>
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
              <div className={styles.image__wrapper} ref={imageWrapperRef3}>
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div className={styles.image__wrapper} ref={imageWrapperRef4}>
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
