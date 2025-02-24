"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { scaleAnimation } from "@/animations";
import styles from "../../styles/HomePage/cursor.module.scss";

interface CursorState {
  active: boolean;
}

const Cursor = ({
  active,
  length,
  cursor,
  boundary
}: {
  active: number;
  length: number;
  cursor: CursorState;
  boundary: any
}) => {
  const cursorRef = useRef(null);


  useEffect(() => {
    //Move cursor

    let xMoveCursor = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    boundary.current.addEventListener("mousemove", (e: MouseEvent) => {
      const { pageX, pageY } = e;

      xMoveCursor(pageX);

      yMoveCursor(pageY);
    });
  }, []);

  return (
    <motion.div
      variants={scaleAnimation}
      initial="initial"
      animate={cursor.active ? "enter" : "closed"}
      className={styles.cursor}
      ref={cursorRef}
    >
      <div className={styles.cursor__content}>
        View Project
      </div>
    </motion.div>
  );
};

export default Cursor;
