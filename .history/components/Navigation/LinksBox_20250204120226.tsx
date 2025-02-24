"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import styles from "../../styles/Navigation/linksbox.module.scss"

const LinksBox = () => {
  const pathname = usePathname();

  return (
    <div className={styles.links__box}>
      <h1>Socials</h1>
      <div className={styles.links__wrapper}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Home</Link>
      </div>
    </div>
  )
}

export default LinksBox