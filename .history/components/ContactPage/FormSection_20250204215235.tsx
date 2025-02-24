import React, {RefObject} from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import styles from "../../styles/ContactPage/formsection.module.scss"

const FormSection = ({ref}: {ref:  RefObject<HTMLDivElement | null>}) => {
  return (
    <section className={`section ${styles.form__section}`} ref={ref}>
      <div className={`container ${styles.form__container}`}>
        <div className={styles.form__wrapper}>
          <div className={styles.form__left}>
            <ButtonHeader text="Contact form"/>
          </div>
          <div className={styles.form__right}>
            <div className={styles.mform__wrapper}>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSection