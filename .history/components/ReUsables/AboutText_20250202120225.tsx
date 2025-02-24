import React from "react";
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

  return (
    <section className={`section ${styles.text__section}`}>
      <div className={`container ${styles.text__container}`}>
        <div className={styles.text__wrapper}>
          {splitWords(textone).map((word, i) => (
            <p className={styles.word__wrapper} key={i}>
              <span>{word}</span>
            </p>
          ))}
        </div>
        {texttwo && (
          <div className={styles.text__wrapper}>
            {splitWords(texttwo).map((word, i) => (
              <p className={styles.word__wrapper} key={i}>
                <span>{word}</span>
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutText;
