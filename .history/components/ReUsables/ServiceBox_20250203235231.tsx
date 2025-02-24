"use client";

import React, { useRef } from "react";
import Image from "next/image";
import IMAGE from "../../public/images/homevideo.jpg";
import HeroText from "./HeroText";
import Button from "./Button";
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

const ServiceBox = ({ content, length }: { content: ServiceProps, length: number }) => {
  //Parallax For Image
  const container = useRef(null);
  const { scrollYProgress: scroll1 } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scroll1, [0, 1], [-100, 0]);


  //Parralax for card
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"],
  });

  // Only apply parallax if it's NOT the last item
  const y =
    i !== ServicesData.length - 1
      ? useTransform(scrollYProgress, [0, 1], [0, 250])
      : undefined;
  return (
    <div className={styles.servicebox}>
      <div className={styles.sb__top}>
        <div className={styles.sbt__left}>
          <div className={styles.overflow}>
            <span>0{content.id}</span>
          </div>
        </div>
        <div className={styles.sbt__right}>
          <div className={styles.overflow}>
            <h1>{content.name}</h1>
          </div>
        </div>
      </div>
      <div className={styles.sb__bottom}>
        <div className={styles.sbb__left}>
          <div className={styles.image__container} ref={container}>
            <motion.div className={styles.image__wrapper} style={{ y: y1 }}>
              <Image
                fill
                quality={100}
                alt={content.name}
                src={content.image}
              />
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
              <Button link="/contact" color="black" text="Get in touch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
