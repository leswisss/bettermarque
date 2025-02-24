import React from 'react'
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.navigation}>
      <div className={`container ${styles.navigation__container}`}>
        <div className={styles.nav__left}>
          <div className={styles.nav__agency}>
            <span>Yaoundé Based Strategic<br />Branding Agency</span>
          </div>
          <div className={styles.nav__image}>

          </div>
        </div>
        <div className={styles.nav__right}>
          <div className={styles.nav__rightl}>

          </div>
          <div className={styles.nav__right}>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar