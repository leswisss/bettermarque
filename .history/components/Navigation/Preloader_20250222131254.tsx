"use client";

import React, { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import IMAGE from "../../public/svg/brandmark.svg";
import Image from "next/image";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = ({
  setAnimation,
}: {
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const clipRef = useRef(null);
  const sloganRef = useRef(null);
  const preLeft = useRef(null);
  const preRight = useRef(null);
  const imageRef = useRef(null);
  const imagerRef = useRef(null);
  const pathName = usePathname();


  //Animations
  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimation(true);
      },
    });

    tl.to(sloganRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.in",
    })

      .to(
        imagerRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.in",
        },
        "<"
      )

      .to(
        clipRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 2,
          ease: "expo.in",
        },
        ">"
      )

      .to(
        imageRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 2,
          ease: "expo.in",
        },
        "<"
      )

      .to(
        sloganRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power2",
        },
        ">+1"
      )

      .to(
        imagerRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power2",
        },
        "<"
      )

      .to(
        preLeft.current,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          duration: 1,
          ease: "power4.inOut",
        },
        ">"
      )

      .to(
        preRight.current,
        {
          clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          duration: 1,
          ease: "power4.inOut",
        },
        "<"
      );

    tl.play();
  }, []);

  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__left} ref={preLeft}></div>
      <div className={styles.preloader__right} ref={preRight}></div>
      {pathName === "/" ? (
        <div className={styles.slogan__wrapper} ref={sloganRef}>
          <div className={styles.s__wrap1}>
            <span className={styles.black}>© Embrace Uniqueness</span>
          </div>
          <div className={styles.s__wrap2} ref={clipRef}>
            <span className={styles.white}>© Embrace Uniqueness</span>
          </div>
        </div>
      ) : (
        <div className={styles.image__wrapper} ref={imagerRef}>
          <div className={styles.imager}>
            <Image fill quality={100} alt="Brand Mark" src={IMAGE} />
          </div>
          <div className={styles.imager2} ref={imageRef}>
            <Image fill quality={100} alt="Brand Mark" src={IMAGE} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
