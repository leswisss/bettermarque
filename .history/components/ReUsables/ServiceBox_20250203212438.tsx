"use client";

import React, { useRef } from "react";
import Image from "next/image";
import IMAGE from "../../public/images/homevideo.jpg"
import HeroText from "./HeroText";
import Button from "./Button";
import { StaticImageData } from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/ReUsables/servicebox.module.scss";

const ServiceBox = () => {
  const mainText = "Shape your brand's future with positioning that sets you apart, fosters creativity, and aligns seamlessly with your long-term goals while steering your business toward sustainable growth and success."
  
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  return (
    <div className={styles.servicebox}>
      <div className={styles.sb__top}>
        <div className={styles.sbt__left}>
          <div className={styles.overflow}>
            <span>01</span>
          </div>
        </div>
        <div className={styles.sbt__right}>
          <div className={styles.overflow}>
            <h1>BRAND STRATEGY</h1>
          </div>
        </div>
      </div>
      <div className={styles.sb__bottom}>
        <div className={styles.sbb__left}>
          <div className={styles.image__container} ref={container}>
            <motion.div className={styles.image__wrapper} style={{ y }}>
              <Image fill quality={100} alt="Brand Identity" src={IMAGE}/>
            </motion.div>
          </div>
        </div>
        <div className={styles.sbb__right}>
          <div className={styles.textbox}>
            <HeroText maintext={mainText}/>
          </div>

          <div className={styles.sbb__bottom}>
            <div className={styles.details__box}>
              <span>Research & Insights</span>
              <span>Research & Insights</span>
              <span>Research & Insights</span>
              <span>Research & Insights</span>
              <span>Research & Insights</span>
            </div>
            <div className={styles.details__cta}>

            <Button link="/contact" color="black" text="Get in touch"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
