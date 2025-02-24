import React, {RefObject} from 'react'
import styles from "../../styles/ContactPage/formsection.module.scss"

const FormSection = ({ref}: {ref:  RefObject<HTMLDivElement>}) => {
  return (
    <section className={`section ${styles.form__section}`} ref>

    </section>
  )
}

export default FormSection