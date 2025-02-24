'use client';

import React from 'react'
import { useRouter } from "next/navigation";
import styles from "../styles/Navigation/notfound.module.scss"

const NotFoundPage = () => {
  return (
    <section className={styles.notfound__section}>
      <div className={`container ${styles.notfound__container}`}>
        <div className={styles.fof__big}>
          <span className={styles.spanone}>404</span>
          <div className={styles.nf__text}>
            <h2>Page not found</h2>
            <p>Sorry, the page you are looking for does not exist or has been removed.</p>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default NotFoundPage