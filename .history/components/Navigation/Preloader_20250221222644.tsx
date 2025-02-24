"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = () => {

   //Animations
   useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(clipRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 3,
      ease: "expo.in",
    })

  }, []]);



  const clipRef = useRef(null);
  const sloganRef = useRef(null);
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__left}></div>
      <div className={styles.preloader__right}></div>
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
