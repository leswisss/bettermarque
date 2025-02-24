"use client";

import React from 'react'
import use
import Link from 'next/link'
import styles from "../../styles/Navigation/linksbox.module.scss"

const LinksBox = () => {
  return (
    <div className={styles.links__box}>
      <h1>Socials</h1>
      <div className={styles.links__wrapper}>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
      </div>
    </div>
  )
}

export default LinksBox