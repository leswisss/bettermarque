import React from 'react'
import Button from './Button'
import HeroText from './HeroText'
import ButtonHeader from './ButtonHeader'
import styles from "../../styles/ReUsables/ourapproach.module.scss"

const OurApproach = () => {
  const approachText = "A thoughtful, values-driven approach to building impactful identities that resonate, inspire, and lead."

  return (
    <section className={`section ${styles.approach__section}`}>
      <div className={`container ${styles.approach__container}`}>
        <div className={styles.approach__wrapper}>
          <div className={styles.approach__left}>
            <ButtonHeader text='Our Approach'/>
          </div>
          <div className={styles.approach__right}>
            <HeroText maintext={approachText}/>
            <div className={styles.approachr__bottom}>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurApproach