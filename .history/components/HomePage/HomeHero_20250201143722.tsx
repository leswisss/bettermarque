import React from 'react'
import Button from '../ReUsables/Button'
import styles from "../../styles/HomePage/hero.module.scss"

const HomeHero = () => {
  return (
    <section className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}>

        <div className={styles.hero__bottom}>
          <div className={styles.hb__left}>

          </div>
          <div className={styles.hb__right}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero