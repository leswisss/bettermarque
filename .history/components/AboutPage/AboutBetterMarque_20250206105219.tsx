import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import Button from '../ReUsables/Button'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/AboutPage/abotbm.module.scss"

const AboutBetterMarque = () => {
  const mainText = "Fully committed and seamlessly aligned, we become an integral extension of your brand team."
  return (
    <section className={`section ${styles.aboutbm__section}`}>
      <div className={`container ${styles.aboutb__container}`}>
        <div className={styles.aboutbm__wrapper}>
          <div className={styles.aboutbm__left}>
            <ButtonHeader text='About Better Marque'/>
          </div>
          <div className={styles.aboutbm__right}>
            <HeroText maintext={mainText}/>
            <div className={styles.about__bottom}>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBetterMarque