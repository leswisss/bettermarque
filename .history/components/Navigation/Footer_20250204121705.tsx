import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/svg/wordmark.svg"
import IMAGE2 from "../../public/svg/brandmark.svg"
import Button from '../ReUsables/Button'
import LinksBox from './LinksBox'
import { FooterLink1, FooterLink2 } from '@/utils'
import styles from "../../styles/Navigation/footer.module.scss"

const Footer = () => {
  return (
    <footer className={`section ${styles.footer__section}`}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <div className={styles.ft__left}>
            <span className={styles.ready}>Ready to Shine?</span>
            <Button color='white' size='large' text='Get in touch' link='/contact'/>
          </div>
          <div className={styles.ft__right}>
            <div className={styles.wordmark}>
              <Image fill quality={100} src={IMAGE} alt="BetterMarque"/>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.fb__top}>
            <div className={styles.fbt__left}>
              <div className={styles.brandmark}>
                <Image fill quality={100} src={IMAGE2} alt='BetterMarque'/>
              </div>
            </div>
            <div className={styles.fbt__right}>
              <LinksBox content={FooterLink1}/>
              <LinksBox content={FooterLink2}/>
            </div>
          </div>
          <div className={styles.fb__bottom}>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer