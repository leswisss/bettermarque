import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
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
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo