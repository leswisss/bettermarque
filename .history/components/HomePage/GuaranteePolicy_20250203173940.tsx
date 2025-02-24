import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import HeroText from '../ReUsables/HeroText'
import PolicyBox from '../ReUsables/PolicyBox'
import { PolicyData } from '@/utils'
import styles from "../../styles/HomePage/guaranteepolicy.module.scss"

const GuaranteePolicy = () => {
  const mainText = "Here’s how we make every project seamless, stress-free, and truly rewarding for you."
  return (
    <section className={`section ${styles.policy__section}`}>
      <div className={`container ${styles.policy__container}`}>
        <div className={styles.policy__wrapper}>
          <div className={styles.pw__left}>
            <ButtonHeader text='Guarantee policy'/>
          </div>
          <div className={styles.pw__right}>
            <HeroText maintext={mainText}/>
            <div className={styles.pwr__bottom}>
              <PolicyBox content={Pol}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteePolicy