import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/homevideo.jpg"
import styles from "../../styles/ReUsables/projectbox.module.scss"

const ProjectBox = () => {
  return (
    <div className={styles.project__box}>
      <div className={styles.project__image}>
        <Image quality={100} fill />
      </div>
    </div>
  )
}

export default ProjectBox