import React from 'react'
import Image from 'next/image'
import WORDMARK from "../../public/svg/wordmark.svg"
import styles from "../../styles/Navigation/sidebar.module.scss"

const SideBar = () => {
  return (
    <div className={`container ${styles.side__container}`}>
      <div className={styles.side__wrapper}>
        <div className={styles.side__header}>
          <div className={styles.sideh__left}>
            <div className={styles.si__wrapper}>
              <Image fill quality={100} src={WORDMARK} alt="Better Marque Branding Agency"/>
            </div>
          </div>
          <div className={styles.sideh__right}>
            <span className={styles.close__text}>Close</span>
            <div className={styles.x__wrapper}>
            <span></span>
            <span></span>
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