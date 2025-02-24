import React from "react";
import styles from "../../styles/ReUsables/herotext.module.scss";

const HeroText = ({ maintext, animationFinished }: { maintext: string }) => {
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };


  return (
    <div className={styles.hero__maintext}>
      {splitWords(maintext).map((word, i) => (
        <p className={styles.word__wrapper} key={i}>
          <span style={{ transform: inView ? "translateY(0%)" : "translateY(100%)" }}>{word}</span>
        </p>
      ))}
    </div>
  );
};

export default HeroText;