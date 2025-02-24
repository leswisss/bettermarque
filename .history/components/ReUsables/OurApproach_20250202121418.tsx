import React from 'react'
import Button from './Button'
import ButtonHeader from './ButtonHeader'
import styles from "../../styles/ReUsables/ourapproach.module.scss"

const OurApproach = () => {
  return (
    <section className={`section ${styles.approach__section}`}>
      <div className={`container ${styles.approach__container}`}>
        <div className={styles.approach__wrapper}>
          <div className={styles.approach__left}>
            <ButtonHeader text='Our Approach'/>
          </div>
          <div className={styles.approach__right}>
            <div className={}>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurApproach