import React from 'react'
import styles from "../../styles/ReUsables/policybox.module.scss"

const PolicyBox = () => {
  return (
    <div className={styles.box__wrapper}>
      <div className={styles.bw__top}>
        <span>01</span>
      </div>
      <div className={styles.bw__bottom}>
        <h1>Unmatched Quality</h1>
        <p>We deliver the highest quality for every project, with exceptional results that exceed your expectations.</p>
      </div>
    </div>
  )
}

export default PolicyBox