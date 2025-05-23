"use client";

import React, { useRef, useState } from "react";
import { StaticImageData } from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Cursor from "./Cursor";
import Image from "next/image";
import styles from "../../styles/ReUsables/projectbox.module.scss";


interface ContentProps{
  name: string;
  slug: string;
  year: number;
  slogan: string;
  services: string;
  coverImage: {
    image: StaticImageData,
    alt: string
  },
}

const ProjectBox = ({content}: {content: ContentProps}) => {
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  //CursorAnim
  const [cursor, setCursor] = useState(false);
  const mainRef = useRef<HTMLAnchorElement | null>(null);


  //Text Animation
  const { ref: ref, inView: inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <>
      <Link
        href={`/projects/${content.slug}`}
        className={styles.project__box}
        ref={mainRef}
        onMouseEnter={() => {
          setCursor(true);
        }}
        onMouseLeave={() => {
          setCursor(false);
        }}
      >
        <div className={styles.image__wrapper} ref={container}>
          <motion.div className={styles.project__image} style={{ y }}>
            <Image quality={100} fill src={content.coverImage.image} alt={content.coverImage.alt} />
          </motion.div>
        </div>
        <div className={styles.content__wrapper} ref={ref} style={{opacity: inView ? 1 : 0}}>
          <div className={styles.cw__top}>
            <div>
              <span className={styles.cw__name}>{content.name}</span><span className={styles.cw__line}>|</span><span className={styles.cw__slogan}>{content.slogan}</span>
            </div>
            <span className={styles.cw__date}>{content.date}</span>
          </div>
          <div className={styles.cw__bottom}>
            <span>Strategy - Visual Identity - Website</span>
          </div>
        </div>
      </Link>
      <Cursor activeState={cursor} boundary={mainRef} text="View"/>
    </>
  );
};

export default ProjectBox;
