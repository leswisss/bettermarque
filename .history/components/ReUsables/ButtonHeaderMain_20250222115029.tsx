import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/ReUsables/buttonheader.module.scss";

const ButtonHeaderMain = ({ text }: { text: string }) => {
  return (
    <div className={styles.bhcontent} ref={ref}>
      <div className={styles.bhwrapper} style={{ transform: inView ? "translateY(0%)" : "translateY(100%)" }}>
        <div className={styles.orange__button}></div>
        <div className={styles.button__text}>{text}</div>
      </div>
    </div>
  );
};

export default ButtonHeaderMain;
