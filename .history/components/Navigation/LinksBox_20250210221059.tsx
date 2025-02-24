"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import styles from "../../styles/Navigation/linksbox.module.scss"

interface Linkers {
  name: string,
  link: string
}
interface FooterLinks {
  header: string;
  links: Linkers[]
}

const LinksBox = ({content, target}: {content: FooterLinks, target: string}) => {
  const pathname = usePathname();

  return (
    <div className={styles.links__box}>
      <h1 className={styles.header}>{content.header}</h1>
      <div className={styles.links__wrapper}>
        {
          content.links.map((data, i) => (
            <Link target='' href={data.link} className={`${styles.link} ${data.link === pathname ? styles.translucent : ""}`} key={i}>{data.name}</Link>
          ))
        }
      </div>
    </div>
  )
}

export default LinksBox