import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import Link from 'next/link'
import styles from "../../styles/ContactPage/contactinfo.module.scss"

const ContactInfo = () => {
  return (
    <section className={`section ${styles.info__section}`} >
      <div className={`container ${styles.info__container}`}>
        <div className={styles.info__wrapper}>
          <div className={styles.info__left}>
            <ButtonHeader text='Contact Details'/>
          </div>
          <div className={styles.info__right}>
            <div className={styles.main__info}>
              <span className={styles.span}>Email</span>
              <Link className={styles.link} href="mailto:projects@bettermarque.com">projects@bettermarque.com</Link>
            </div>
            <div className={styles.main__info}>
              <span className={styles.span}>Phone</span>
              <Link className={styles.link} href="tel:+3">00237 693 370 638</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo