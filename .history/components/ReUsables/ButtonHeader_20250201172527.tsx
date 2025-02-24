import React from 'react'
import styles from "../../styles/ReUsables/buttonheader.module.scss"

const ButtonHeader = () => {
  return (
    <div className={styles.bhcontent}>
      <div className={styles.orange__button} />
      <div className={styles.button__text}></div>
    </div>
  )
}

export default ButtonHeader