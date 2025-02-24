import React from 'react'
import styles from "../../styles/ReUsables/policybox.module.scss"


interface PolicyProps {
  id: number,
  header: string,
  text: string
}

const PolicyBox = ({content}: {content: PolicyProps}) => {
  return (
    <div className={styles.box__wrapper}>
      <div className={styles.bw__top}>
        <span>0{content.id}</span>
      </div>
      <div className={styles.bw__bottom}>
        <span>{content.header}</span>
        <p>{content.text}</p>
      </div>
    </div>
  )
}

export default PolicyBox