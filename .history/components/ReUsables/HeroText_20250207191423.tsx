import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/ReUsables/herotext.module.scss";

const HeroText = ({ maintext }: { maintext: string }) => {
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };

  const { ref: ref, inView: inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div className={styles.hero__maintext} ref={ref}>
      {splitWords(maintext).map((word, i) => (
        <p className={styles.word__wrapper} key={i}>
          <span style={{ top: inView ? "0%" : "100%" }}>{word}</span>
        </p>
      ))}
    </div>
  );
};

export default HeroText;
