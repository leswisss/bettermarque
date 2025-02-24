import React from 'react'
d
import styles from "../../styles/ReUsables/buttonheader.module.scss"

const ButtonHeader = ({text}: {text: string}) => {
  return (
    <div className={styles.bhcontent}>
      <div className={styles.orange__button} />
      <div className={styles.button__text}>{text}</div>
    </div>
  )
}

export default ButtonHeader