import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/ReUsables/abouttext.module.scss";

const AboutText = ({
  textone,
  texttwo,
}: {
  textone: string;
  texttwo?: string;
}) => {
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };

  const { ref: ref, inView: inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section className={`section ${styles.text__section}`}>
      <div className={`container ${styles.text__container}`}>
        <div className={styles.text__wrapper} ref={ref}>
          {splitWords(textone).map((word, i) => (
            <p className={styles.wword__wrapper} key={i}>
              <span className={styles.ww__span}>{word}</span>
            </p>
          ))}
        </div>
        {texttwo && (
          <div className={styles.text__wrapper}>
            {splitWords(texttwo).map((word, i) => (
              <p className={styles.wword__wrapper} key={i}>
                <span className={styles.ww__span}>{word}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutText;
