import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/homevideo.jpg"
import styles from "../../styles/ReUsables/projectbox.module.scss"

const ProjectBox = () => {
  return (
    <div className={styles.project__box}>
      <div className={styles.image__wrapper}>
        <div className={styles.project__image}>
        <Image quality={100} fill src={IMAGE} alt="Project Image"/>
        </div>
      </div>
      <div className={styles.image__overlay}>
        <div className={styles.overlay__left}>

        </div>
      </div>
    </div>
  )
}

export default ProjectBox