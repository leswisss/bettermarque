"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import HeroText from "./HeroText";
import Button from "./Button";
import { useInView } from "react-intersection-observer";
import ImagePlaceholderThree from "./ImagePlaceholderThree";
import { StaticImageData } from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/ReUsables/servicebox.module.scss";

interface ServiceProps {
  id: number;
  name: string;
  text: string;
  image: StaticImageData;
  details: string[];
}

const ServiceBox = ({
  content,
  serlength,
}: {
  content: ServiceProps;
  serlength: number;
}) => {
  //Parallax For Image
  const container = useRef(null);
  const { scrollYProgress: scroll1 } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  //Handle Resizing Y value for Image
  const [transform, setTransform] = useState(-100);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-35);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-55);
      } else {
        setTransform(-100);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y1 = useTransform(scroll1, [0, 1], [transform, 0]);

  //Parralax for card
  const container2 = useRef(null);
  const { scrollYProgress: scroll2 } = useScroll({
    target: container2,
    offset: ["end end", "end start"],
  });

  // Only apply parallax if it's NOT the last item
  const y = useTransform(scroll2, [0, 1], [0, 250]);

  //Text anaimation on scroll
  const { ref: ref, inView: inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <motion.div
      className={styles.servicebox}
      style={
        content.id !== serlength
          ? { y, zIndex: content.id }
          : { zIndex: content.id }
      }
      ref={container2}
    >
      <div className={styles.sb__top} ref={ref}>
        <div className={styles.sbt__left}>
          <div className={styles.overflow}>
            <span
              style={{
                transform: inView ? "translateY(0%)" : "translateY(100%)",
              }}
            >
              0{content.id}
            </span>
          </div>
        </div>
        <div className={styles.sbt__right}>
          <div className={styles.overflow}>
            <h1
              style={{
                transform: inView ? "translateY(0%)" : "translateY(100%)",
              }}
            >
              {content.name}
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.sb__bottom}>
        <div className={styles.sbb__left}>
          <div className={styles.image__container} ref={container}>
            <motion.div className={styles.image__wrapper} style={{ y: y1 }}>
              <ImagePlaceholderTwo alt={content.name} src={content.image} />
            </motion.div>
          </div>
        </div>
        <div className={styles.sbb__right}>
          <div className={styles.textbox}>
            <HeroText maintext={content.text} />
          </div>

          <div className={styles.sbb__bottom}>
            <div className={styles.details__box}>
              {content.details.map((detail, i) => (
                <span key={i}>{detail}</span>
              ))}
            </div>
            <div className={styles.details__cta}>
              <Button
                size="normal"
                link="/contact"
                color="black"
                text="Get in touch"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceBox;
