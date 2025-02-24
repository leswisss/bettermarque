import React from 'react'
import Image from 'next/image'
import WORDMARK from "../../public/svg/wordmark.svg"
import styles from "../../styles/Navigation/sidebar.module.scss"

const SideBar = () => {
  return (
    <div className={`container ${styles.side__container}`}>
      <div className={styles.side__wrapper}>
        <div className={styles.side__header}>
          <div className={styles.side__image}>
            <div className={styles.si__wrapper}>
              <Image />
            </div>
          </div>
        </div>
        <div className={styles.side__body}>

        </div>
      </div>
    </div>
  )
}

export default SideBar