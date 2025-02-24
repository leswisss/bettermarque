import React from 'react'
import styles from "../../styles/ReUsables/abouttext.module.scss"


const AboutText = () => {
  const text1 = "Breaking conventions with bold creativity and an unyielding commitment to excellence, Better Marque redefines how brands connect and grow."
  const text2 = "We don’t believe in cookie-cutter solutions, instead we partner with brands to craft bespoke identities and digital experiences that resonate and endure."
  
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };
  return (
    <section className={`section ${styles.text__section}`}>
      <div className={`container ${styles.text__container}`}>
        <div className={styles.text__wrapper}>
          {
            splitWords(text1).map((word, i) => (
              <p className={styles.word__wrapper} key={i}>
                <span>{word}</span>
              </p>
            ))
          }
        </div>
        <div className={styles.text__wrapper}>
          {
            splitWords(text2).map((word, i) => (
              <p className={styles.word__wrapper} key={i}>
                <span>{word}</span>
              </p>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default AboutText