"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = () => {
  const clipRef = useRef(null);
  const sloganRef = useRef(null);
  const preLeft = useRef(null);
  const preRight = useRef(null);

   //Animations
   useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(sloganRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.in"
    })

    .to(clipRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "expo.in",
    }, ">")

    .to(sloganRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2"
    })

    .to(preLeft.current, {
      clipPath
    })

  }, []);

  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__left} ref={preLeft}></div>
      <div className={styles.preloader__right} ref={preRight}></div>
      <div className={styles.slogan__wrapper} ref={sloganRef}>
        <div className={styles.s__wrap1}>
          <span className={styles.black}>© Embrace Uniqueness</span>
        </div>
        <div className={styles.s__wrap2} ref={clipRef}>
          <span className={styles.white}>© Embrace Uniqueness</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
