import React from 'react'
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.navigation}>
      <div className={`container ${styles.navigation__container}`}>
        <div className={styles.nav__left}>
          <div>
            <span></span>
          </div>
        </div>
        <div className={styles.nav__right}>

        </div>
      </div>
    </header>
  )
}

export default Navbar