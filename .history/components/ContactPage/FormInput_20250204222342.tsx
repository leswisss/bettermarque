import React from 'react'
import styles from "../../styles/ContactPage/forminput.module.scss"


const FormInput = ({inputState}: {inputState: boolean}) => {
  return (
    <div className={styles.input__wrapper}>
      <span>First name</span>
      {
        inputState ? (<input placeholder='Full name here*' name='firstname' type="text" required/>) : (<textarea)
      }
      
    </div>
  )
}

export default FormInput