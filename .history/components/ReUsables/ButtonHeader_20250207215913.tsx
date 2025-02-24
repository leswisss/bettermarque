import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/ReUsables/buttonheader.module.scss";

const ButtonHeader = ({ text }: { text: string }) => {
  //Text anaimation on scroll
  const { ref: ref, inView: inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div className={styles.bhcontent} ref={}>
      <div className={styles.bhwrapper}>
        <div className={styles.orange__button}></div>
        <div className={styles.button__text}>{text}</div>
      </div>
    </div>
  );
};

export default ButtonHeader;
