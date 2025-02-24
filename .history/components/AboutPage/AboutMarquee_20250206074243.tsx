"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import IMAGE from "../../public/images/sparkler.png"; // Replace with your image path
import styles from "../../styles/AboutPage/aboutmarquee.module.scss";

const AboutMarquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const sliderRef = useRef(null);
  const imageWrapperRefs = useRef([]); // Collect refs in an array
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  const rotationSpeedRef = useRef(0.5); // For adjusting rotation speed dynamically

  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement
  let rotation = 0; // Rotation angle

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Function to animate marquee and rotation
    const animate = () => {
      xPercent += speed * directionRef.current;
      if (xPercent <= -100) xPercent = 0;
      if (xPercent >= 0) xPercent = -100;

      gsap.set([firstText.current, secondText.current], { xPercent });

      rotation += rotationSpeedRef.current * directionRef.current;

      imageWrapperRefs.current.forEach((el) => {
        gsap.set(el, { rotation, transformOrigin: "center center" });
      });
    };

    // Use GSAP ticker for consistent animation
    gsap.ticker.add(animate);

    // Scroll-triggered adjustments
    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        directionRef.current = self.direction * -1;

        // Adjust rotation speed based on scroll velocity
        const scrollVelocity = self.getVelocity();
        const newRotationSpeed = Math.min(Math.abs(scrollVelocity) / 100, 5);
        rotationSpeedRef.current = newRotationSpeed || 0.5; // Fallback to 0.5 when not scrolling
      },
    });

    return () => {
      // Clean up the ticker and scroll triggers on unmount
      gsap.ticker.remove(animate);
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <div className={styles.aboutsliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        {/* First Text */}
        <div ref={firstText} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            {[...Array(2)].map((_, idx) => (
              <div key={`first-${idx}`} className={styles.content__wrapper}>
                <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
                <div
                  className={styles.image__wrapper}
                  ref={(el) => {
                    if (el) imageWrapperRefs.current.push(el);
                  }}
                >
                  <Image
                    fill
                    quality={100}
                    alt="Better Marque"
                    src={IMAGE}
                  />
                </div>
              </div>
            ))}
          </div>
          <span></span>
        </div>
        {/* Second Text */}
        <div ref={secondText} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            {[...Array(2)].map((_, idx) => (
              <div key={`second-${idx}`} className={styles.content__wrapper}>
                <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
                <div
                  className={styles.image__wrapper}
                  ref={(el) => {
                    if (el) imageWrapperRefs.current.push(el);
                  }}
                >
                  <Image
                    fill
                    quality={100}
                    alt="Better Marque"
                    src={IMAGE}
                  />
                </div>
              </div>
            ))}
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default AboutMarquee;


