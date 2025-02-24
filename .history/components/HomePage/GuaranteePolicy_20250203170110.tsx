import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/HomePage/guaranteepolicy.module.scss"

const GuaranteePolicy = () => {
  const mainText = 
  return (
    <section className={`section ${styles.policy__section}`}>
      <div className={`container ${styles.policy__container}`}>
        <div className={styles.policy__wrapper}>
          <div className={styles.pw__left}>
            <ButtonHeader text='Guarantee policy'/>
          </div>
          <div className={styles.pw__right}>
            <HeroText maintext=''/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteePolicy