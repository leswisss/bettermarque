"use client";

import React, { useRef, RefObject } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { scaleAnimation } from "@/animations";
import styles from "../../styles/ReUsables/cursor.module.scss";

const Cursor = ({
  activeState,
  boundary,
  text
}: {
  activeState: boolean,
  boundary: RefObject<HTMLAnchorElement | null | HTMLVideoElement>;
  text: string
}) => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    //Move cursor

    const xMoveCursor = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    const yMoveCursor = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    boundary.current?.addEventListener("mousemove", (e: Event) => {
      const mouseEvent = e as MouseEvent; // Type assertion to MouseEvent
  const { pageX, pageY } = mouseEvent;
      xMoveCursor(pageX);

      yMoveCursor(pageY);
    });
  });

  return (
    <motion.div
      variants={scaleAnimation}
      initial="initial"
      animate={activeState ? "enter" : "closed"}
      className={styles.cursor}
      ref={cursorRef}
    >
      <span>{text}</span>
    </motion.div>
  );
};

export default Cursor;
