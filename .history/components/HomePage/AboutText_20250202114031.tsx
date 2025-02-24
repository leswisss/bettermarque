import React from 'react'
import styles from "../../styles/HomePage/abouttext.module.scss"

const AboutText = () => {
  const text1 = "Breaking conventions with bold creativity and an unyielding commitment to excellence, Better Marque redefines how brands connect and grow."
  const text2 = "We don’t believe in cookie-cutter solutions, instead we partner with brands to craft bespoke identities and digital experiences that resonate and endure."
  
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };
  return (
    <section className={`section ${styles.text__section}`}>
      <div className={`container ${styles.text__container}`}>
        <div className={styles.text__box}>

        </div>
      </div>
    </section>
  )
}

export default AboutText