"use client";

import React from 'react'
import { NavMenu } from '@/utils';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Clock from './Clock';
import BRANDMARK from "../../public/svg/wordmark.svg"
import Image from "next/image";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  //Used to get the current pathname so that I can chnage the colors of the menu's rescpectively
  const pathname = usePathname()

  return (
    <header className={styles.navigation}>
      <div className={`container ${styles.navigation__container}`}>
        <div className={styles.navigation__wrapper}>
        <div className={styles.nav__left}>
          <span className={styles.nav__agency}>Yaoundé Based Strategic<br />Branding Agency</span>
          <div className={styles.nav__image}>
            <Image fill quality={100} alt="BetterMarque Wordmark"/>
          </div>
        </div>
        <div className={styles.nav__right}>
          <div className={styles.nav__rightl}>
            <div className={styles.nav__menu}>
              {
                NavMenu.map((data, i) => (
                  <Link key={data.id} href={data.link} className={`${pathname===data.link ? styles.white : ""}`}>{data.name}</Link>
                ))
              }
            </div>
            <div className={styles.nav__time}>
              <Clock/>
              <span>Yaoundé, Cameroon</span>
            </div>
          </div>
          <div className={styles.nav__rightr}>
            <Link href="/contact" className={styles.nav__contact}>Start a project</Link>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar