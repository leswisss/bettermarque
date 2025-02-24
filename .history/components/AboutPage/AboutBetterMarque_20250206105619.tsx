import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import Button from '../ReUsables/Button'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/AboutPage/abotbm.module.scss"

const AboutBetterMarque = () => {
  const mainText = "Fully committed and seamlessly aligned, we become an integral extension of your brand team."
  const text1 = "Better Marque is a creative branding agency that specializes in building unique, purpose-driven identities for businesses in architecture, real estate, and construction. With a deep commitment to authenticity, we help our clients stand out by creating memorable brands that resonate with their audience and align with their vision."
  const text2 = "Our focus is on delivering impactful results through a seamless, efficient process, ensuring that every project is executed with precision and care. Whether you’re redefining your brand or embarking on a new venture, Better Marque is here to help you tell your story with clarity and confidence."
  
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
              <span className={styles.bottom__head}>
                Global reach, remote team—headquartered in Yaoundé, Cameroon.
              </span>
              <div className={styles.aboutbb}>
                <div className={styles.bb__top}>
                  <p></p>
                </div>
                <Button color='black' link='/contact' text="Let's work together"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBetterMarque