import React from 'react'
import styles from "../../styles/ReUsables/servicebox.module.scss"

const ServiceBox = () => {
  return (
    <div className={styles.servicebox}>
      <div className={styles.sb__top}>
        <div className={styles.sbt__left}>
          
          <span>01</span>
        </div>
        <div className={styles.sbt__right}>
          <h1>BRAND IDENTITY</h1>
        </div>
      </div>
      <div className={styles.sb__bottom}>
        <div className={styles.sbb__left}>

        </div>
      </div>
    </div>
  )
}

export default ServiceBox