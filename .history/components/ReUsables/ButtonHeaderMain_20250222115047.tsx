import React from "react";
import styles from "../../styles/ReUsables/buttonheader.module.scss";

const ButtonHeaderMain = ({ text }: { text: string }) => {
  return (
    <div className={styles.bhcontent}>
      <div className={styles.bhwrapper}>
        <div className={styles.orange__button}></div>
        <div className={styles.button__text}>{text}</div>
      </div>
    </div>
  );
};

export default ButtonHeaderMain;
