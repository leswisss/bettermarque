import React from 'react'
import styles from "../styles/Navigation/notfound.module.scss"

const NotFoundPage = () => {
  return (
    <section className={styles.notfound__section}>
      <div className={`container ${styles.notfound__container}`}>
        <div className={styles.fof__big}>
          <span>404</span>
        </div>

      </div>
    </section>
  )
}

export default NotFoundPage