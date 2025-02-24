import React from 'react'
import styles from "../styles/Navigation/notfound.module.scss"

const NotFoundPage = () => {
  return (
    <section className={styles.notfound__section}>
      <div className={`container ${styles.notfound__container}`}>
        <div className={styles.fof__big}>
          <span className={styles.spanone}>404</span>
          <div className={styles.nf__text}>
            <h2>Page not found</h2>
          </div>
        </div>

      </div>
    </section>
  )
}

export default NotFoundPage