import React from 'react'
import Link from 'next/link'
import styles from "../../styles/Navigation/linksbox.module.scss"

const LinksBox = () => {
  return (
    <div className={styles.links__box}>
      <h1>Socials</h1>
      <div className={styles.links__wrapper}>
        <Link href="/"></Link>
      </div>
    </div>
  )
}

export default LinksBox