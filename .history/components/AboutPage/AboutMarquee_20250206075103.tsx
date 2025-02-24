"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import IMAGE from "../../public/images/sparkler.png"; // Replace with your image path
import styles from "../../styles/AboutPage/aboutmarquee.module.scss";

const AboutMarquee = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const sliderRef = useRef(null);

  // Create a single useRef to hold an array of image wrapper refs
  const imageWrappers = useRef([]); // Array to store refs of all image wrappers

  const directionRef = useRef(-1); // Use useRef for mutable direction value
  const rotationSpeedRef = useRef(1); // For adjusting rotation speed dynamically

  let xPercent = 0;
  const speed = 0.1; // Adjust speed of movement
  const rotationSpeed = 5; // Base rotation speed

  const animation = () => {
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    // Animate x position of text
    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });

    // Apply rotation to each image wrapper based on the scroll movement
    imageWrappers.current.forEach((wrapper) => {
      if (wrapper) {
        gsap.set(wrapper, {
          rotation: xPercent * rotationSpeedRef.current, // Rotate based on x position
          transformOrigin: "center center", // Ensure the rotation is around the center
        });
      }
    });

    xPercent += speed * directionRef.current; // Use directionRef's current property
    requestAnimationFrame(animation);
  };

  // Use useGSAP hook to handle gsap animations
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Horizontal movement of the slider based on scroll
    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 1,
        onUpdate: (e) => {
          directionRef.current = e.direction * -1; // Update directionRef's current property
          rotationSpeedRef.current = e.direction * 2; // Dynamically change rotation speed
        },
      },
      x: "-150px",
    });

    // Animate based on scroll position and start the animation
    requestAnimationFrame(animation);
  });

  return (
    <div className={styles.aboutsliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        {/* First image wrapper */}
        <div ref={firstText} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div
                className={styles.image__wrapper}
                ref={(el) => imageWrappers.current?[0] = el} // Assign ref to the first image wrapper
              >
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
          </div>
        </div>

        {/* Second image wrapper */}
        <div ref={secondText} className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div
                className={styles.image__wrapper}
                ref={(el) => imageWrappers.current[1] = el} // Assign ref to the second image wrapper
              >
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
          </div>
        </div>

        {/* Third image wrapper */}
        <div className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div
                className={styles.image__wrapper}
                ref={(el) => imageWrappers.current[2] = el} // Assign ref to the third image wrapper
              >
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
          </div>
        </div>

        {/* Fourth image wrapper */}
        <div className={styles.image__mainwrapper}>
          <div className={styles.image__overwrapper}>
            <div className={styles.content__wrapper}>
              <p className={styles.embrace}>EMBRACE UNIQUENESS</p>
              <div
                className={styles.image__wrapper}
                ref={(el) => imageWrappers.current[3] = el} // Assign ref to the fourth image wrapper
              >
                <Image fill quality={100} alt="Better Marque" src={IMAGE} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMarquee;



