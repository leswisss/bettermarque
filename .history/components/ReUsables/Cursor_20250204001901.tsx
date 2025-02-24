"use client";

import React, { useRef, useEffect, RefObject } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { scaleAnimation } from "@/animations";
import styles from "../../styles/ReUsables/cursor.module.scss";

const Cursor = ({
  activeState,
  boundary
}: {
  activeState: boolean,
  boundary: RefObject<HTMLAnchorElement>;
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
      animate={activeState ? "enter" : "closed"}
      className={styles.cursor}
      ref={cursorRef}
    >
      <span>View project</span>
    </motion.div>
  );
};

export default Cursor;
