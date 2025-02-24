import React from 'react'
import Link from 'next/link'
import styles from "../../"

const Button = () => {
  return (
    <Link href="/contact" className={styles.nav__contact}>
                Start a project
              </Link>
  )
}

export default Button