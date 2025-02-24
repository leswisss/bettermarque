import React from 'react'
import Button from './Button'
import ButtonHeader from './ButtonHeader'
import HeroText from './HeroText'
import styles from "../../styles/ReUsables/getintouch.module.scss"

const GetinTouch = () => {
  const mainText = "Ready to take your project to the next level? Let’s collaborate to create the extraordinary. Share your project with us, and together, we’ll make it a reality."
  return (
    <section className={`section ${styles.intouch__section}`}>
      <div className={`container ${styles.intouch__container}`}>
        <div className={styles.intouch__wrapper}>
          <div className={styles.intouch__left}>
            <ButtonHeader text='Get in touch'/>
          </div>
          <div className={styles.intouch__right}>
            <HeroText maintext={mainText}/>
            <div className={styles.button}>

            <Button color='black' link='/contact' text='Talk to us about your project'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetinTouch