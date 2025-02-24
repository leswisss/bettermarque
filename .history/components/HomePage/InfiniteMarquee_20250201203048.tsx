"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import IMAGE from "../../public/svg/wordmarkblack.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../styles/HomePage/infinitemarquee.module.scss";

const InfiniteMarquee = () => {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  const thirdImage = useRef(null);
  const sliderRef = useRef(null);

  let xPercent = 0;
  let direction = -1;
  const speed = 0.1; // Adjust speed of movement

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
    if (xPercent <= -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    gsap.set(firstImage.current, { xPercent });
    gsap.set(secondImage.current, { xPercent });

    xPercent += speed * direction;
    requestAnimationFrame(animation);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        <div ref={firstImage} className={styles.image__wrapper}>
          <Image fill quality={100} alt="Better Marque" src={IMAGE} />
        </div>
        <div ref={secondImage} className={styles.image__wrapper}>
          <Image fill quality={100} alt="Better Marque" src={IMAGE} />
        </div>
        
      </div>
    </div>
  );
};

export default InfiniteMarquee;
