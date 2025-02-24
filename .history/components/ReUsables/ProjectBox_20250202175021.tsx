"use client";

import React, { useRef, useState } from "react";
import { StaticImageData } from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import Cursor from "./Cursor";
import Image from "next/image";
import IMAGE from "../../public/images/homevideo.jpg";
import styles from "../../styles/ReUsables/projectbox.module.scss";


interface ContentProps{
  name: string;
  slogan: string;
  date: number;
  image: StaticImageData,
  link: string
}

const ProjectBox = ({content}: {content: }) => {
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  //CursorAnim
  const [cursor, setCursor] = useState(false);
  const mainRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <>
      <Link
        href="/"
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
            <Image quality={100} fill src={IMAGE} alt="Project Image" />
          </motion.div>
        </div>
        <div className={styles.image__overlay}>
          <div className={styles.overlay__content}>
            <div className={styles.overlay__left}>
              <span>Brinovo Urbano</span>
            </div>
            <div className={styles.overlay__right}>
              <span>Redefining Urban Landscape Architecture</span>
              <span>2024</span>
            </div>
          </div>
        </div>
      </Link>
      <Cursor activeState={cursor} boundary={mainRef} />
    </>
  );
};

export default ProjectBox;
