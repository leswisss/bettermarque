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
        <span>{content.}</span>
      </div>
      <div className={styles.bw__bottom}>
        <span>Unmatched Quality</span>
        <p>We deliver the highest quality for every project, with exceptional results that exceed your expectations.</p>
      </div>
    </div>
  )
}

export default PolicyBox