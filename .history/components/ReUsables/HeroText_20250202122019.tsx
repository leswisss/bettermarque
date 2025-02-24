import React from 'react'
import styles from "../../styles/ReUsables/"

const HeroText = ({maintext}: {maintext: string}) => {
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };

  return (
    <div className={styles.hero__maintext}>
              {splitWords(maintext).map((word, i) => (
                <p className={styles.word__wrapper} key={i}>
                  <span>{word}</span>
                </p>
              ))}
            </div>
  )
}

export default HeroText