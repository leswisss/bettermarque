import React from 'react'
import styles from "../../styles/HomePage/abouttext.module.scss"

const AboutText = () => {
  const text1 = "Breaking conventions with bold creativity and an unyielding commitment to excellence, Better Marque redefines how brands connect and grow."
  
  
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };
  return (
    <section className={`section ${styles.text__section}`}>
      <div className={`container ${styles.text__container}`}>

      </div>
    </section>
  )
}

export default AboutText