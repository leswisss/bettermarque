"use client";

import React, {useRef} from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import IMAGE from "../../public/images/homevideo.jpg";
import styles from "../../styles/ReUsables/projectbox.module.scss";

const ProjectBox = () => {
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  

  return (
    <Link href="/" className={styles.project__box}>
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
  );
};

export default ProjectBox;
