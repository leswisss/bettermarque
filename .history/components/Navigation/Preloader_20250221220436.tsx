"use client"

import React from 'react'
import styles from "../../styles/Navigation/preloader.module.scss"

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader__left}>

      </div>
      <div className={styles.preloader__right}>

      </div>
      <div className={styles.slogan_wrapper} ref={sloganRef}>
        <div className={styles.s_wrap1}>
          <span className={styles.black}>© Embrace Uniqueness</span>
        </div>
        <div className={styles.s_wrap2} ref={clipRef}>
          <span className={styles.white}>© Embrace Uniqueness</span>
        </div>
      </div>
    </div>
  )
}

export default Preloader