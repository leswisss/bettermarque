import React from 'react'
import ButtonHeader from './ButtonHeader'
import HeroText from './HeroText'
import styles from "../../styles/ReUsables/services.module.scss"

const Services = () => {
  const mainText = "Strengthening your brand with the Art of Design and the Power of Execution."
  return (
    <section className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.services__wrapper}>
          <div className={styles.services__top}>
            <div className={styles.services__left}>
              <ButtonHeader text='Our services'/>
            </div>
            <div className={styles.services__right}>
              <HeroText maintext={}/>
            </div>
          </div>
          <div className={styles.services__bottom}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Services