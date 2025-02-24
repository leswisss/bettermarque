import React from 'react'
import { NavMenu } from '@/utils';
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.navigation}>
      <div className={`container ${styles.navigation__container}`}>
        <div className={styles.navigation__wrapper}>
        <div className={styles.nav__left}>
          <span className={styles.nav__agency}>Yaoundé Based Strategic<br />Branding Agency</span>
          <div className={styles.nav__image}>

          </div>
        </div>
        <div className={styles.nav__right}>
          <div className={styles.nav__rightl}>
            <div className={styles.nav__menu}>
              {
                NavMenu.map((data, i) => (
                  <Link key={data.id} href={data.link}>{data.name}</Link>
                ))
              }
            </div>
            <div className={styles.nav__time}>
              <div className={styles.date__wrapper}>
                05:55 PM
              </div>
              <span>Yaoundé, Cameroon</span>
            </div>
          </div>
          <div className={styles.nav__rightr}>
            <Link href="/contact" className={styles.nav__contact}>Start a project</Link>
            <span className={styles.contact}/>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar