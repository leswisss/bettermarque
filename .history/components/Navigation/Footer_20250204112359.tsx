import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/svg/"
import Button from '../ReUsables/Button'
import styles from "../../styles/Navigation/footer.module.scss"

const Footer = () => {
  return (
    <footer className={`section ${styles.footer__section}`}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <div className={styles.ft__left}>
            <span>Ready to Shine?</span>
            <Button color='white' size='large' text='Get in touch' link='/contact'/>
          </div>
          <div className={styles.ft__right}>
            <div className={styles.wordmark}>

            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>

        </div>
      </div>
    </footer>
  )
}

export default Footer