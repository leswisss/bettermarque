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
          <span>Brinovo Urbano</span>
        </div>
        <div className={styles.overlay__right}>
          <span>Urban Landscape Architecture from a new perspective</span>
          <span>2024</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectBox