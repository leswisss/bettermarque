import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <Link href="/contact" className={styles.nav__contact}>
                Start a project
              </Link>
  )
}

export default Button