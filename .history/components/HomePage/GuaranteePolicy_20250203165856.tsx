import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import styles from "../../styles/HomePage/guaranteepolicy.module.scss"

const GuaranteePolicy = () => {
  return (
    <section className={`section ${styles.policy__section}`}>
      <div className={`container ${styles.policy__container}`}>
        <div className={styles.policy__wrapper}>
          <div className={styles.pw__left}>
            <ButtonHeader text=''/>
          </div>
          <div className={styles.pw__right}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default GuaranteePolicy