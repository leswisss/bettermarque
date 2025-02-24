import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import Button from '../ReUsables/Button'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/AboutPage/abotbm.module.scss"

const AboutBetterMarque = () => {
  return (
    <section className={`section ${styles.aboutbm__section}`}>
      <div className={`container ${styles.aboutb__container}`}>
        <div className={styles.aboutbm__wrapper}>
          <div className={styles.aboutbm__left}>
            <ButtonHeader text='About Better Marque'/>
          </div>
          <div className={styles.aboutbm__right}>
            <HeroText/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBetterMarque