import React from 'react'
import styles from "../../styles/HomePage/abouttext.module.scss"

const AboutText = () => {
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