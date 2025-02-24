import React, {RefObject} from 'react'
import styles from "../../styles/ContactPage/formsection.module.scss"

const FormSection = ({ref}: {ref:  RefObject<HTMLDivElement | null>}) => {
  return (
    <section className={`section ${styles.form__section}`} ref={ref}>
      <div className={`container ${styles.form__container}`}>
        <div className={styles.form__wrapper}>
          
        </div>
      </div>
    </section>
  )
}

export default FormSection