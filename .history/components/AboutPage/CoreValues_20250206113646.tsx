import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import HeroText from '../ReUsables/HeroText'
import PolicyBox from '../ReUsables/PolicyBox'
import { CoreValuesData } from '@/utils'
import styles from "../../styles/AboutPage/corevalues.module.scss"

const CoreValues = () => {
  const mainText = "Our principles shape every step we take, defining how we work, create, and build lasting relationships"
  return (
    <section className={`section ${styles.core__section}`}>
      <div className={`container ${styles.core__container}`}>
        <div className={styles.core__wrapper}>
          <div className={styles.core__left}>
            <ButtonHeader text='Our core values'/>
          </div>
          <div className={styles.core__right}>
            <HeroText maintext={mainText}/>
            <div className={styles.core__bottom}>
              {
                Core
              }
            </div>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default CoreValues