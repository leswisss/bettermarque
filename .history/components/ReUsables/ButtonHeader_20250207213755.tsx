import React from 'react'
import { useInView } from "react-intersection-observer";
import styles from "../../styles/ReUsables/buttonheader.module.scss"

const ButtonHeader = ({text}: {text: string}) => {
  return (
    <div className={styles.bhcontent}>
      <div>

      <div className={styles.orange__button} />
      <div className={styles.button__text}>{text}</div>
      </div>
    </div>
  )
}

export default ButtonHeader