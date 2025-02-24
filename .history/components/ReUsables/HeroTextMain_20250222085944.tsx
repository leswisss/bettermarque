import React from "react";
import styles from "../../styles/ReUsables/herotext.module.scss";

const HeroTextMain = ({ maintext, animationFinished }: { maintext: string, animationFinished: boolean }) => {
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };


  return (
    <div className={styles.hero__maintext}>
      {splitWords(maintext).map((word, i) => (
        <p className={styles.word__wrapper} key={i}>
          <span className={`${animationFinished ? styles.activespan : ""}`}>{word}</span>
        </p>
      ))}
    </div>
  );
};

export default HeroTextMain;