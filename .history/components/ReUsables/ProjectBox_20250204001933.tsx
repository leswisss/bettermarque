"use client";

import React, { useRef, useState } from "react";
import { StaticImageData } from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import Cursor from "./Cursor";
import Image from "next/image";
import styles from "../../styles/ReUsables/projectbox.module.scss";


interface ContentProps{
  name: string;
  slogan: string;
  date: number;
  image: StaticImageData,
  link: string
}

const ProjectBox = ({content}: {content: ContentProps}) => {
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  //CursorAnim
  const [cursor, setCursor] = useState(false);
  const mainRef = useRef<HTMLAnchorElement !>(null);

  return (
    <>
      <Link
        href={content.link}
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
            <Image quality={100} fill src={content.image} alt={content.name} />
          </motion.div>
        </div>
        <div className={styles.content__wrapper}>
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
      <Cursor activeState={cursor} boundary={mainRef} />
    </>
  );
};

export default ProjectBox;
