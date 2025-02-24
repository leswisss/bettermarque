import React from 'react'
import styles from "../../styles/ContactPage/forminput.module.scss"


const FormInput = ({input}: {input: boolean}) => {
  return (
    <div className={styles.input__wrapper}>
      <span>First name</span>
      <input />
    </div>
  )
}

export default FormInput