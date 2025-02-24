import React from 'react'
import Button from './Button'
import ButtonHeader from './ButtonHeader'
import HeroSection from './HeroSection'
import styles from "../../styles/ReUsables/getintouch.module.scss"

const GetinTouch = () => {
  return (
    <section className={`section ${styles.intouch__section}`}>
      <div className={`container ${styles.intouch__container}`}>
        <div className={styles.intouch__wrapper}>
          <div className={styles.intouch__left}>
            <ButtonHeader text='Get in touch'/>
          </div>
          <div className={styles.intouch__right}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default GetinTouch