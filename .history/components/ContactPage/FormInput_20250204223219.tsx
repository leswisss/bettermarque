import React from 'react'
import styles from "../../styles/ContactPage/forminput.module.scss"


const FormInput = ({inputState}: {inputState: boolean}) => {
  return (
    <div className={styles.input__wrapper}>
      <span className={styles.label}>First name</span>
      {
        inputState ? (<input cla placeholder='Full name here*' name='firstname' type="text" required/>) : (<textarea placeholder='Start typing here' required name='projectdetail'/>)
      }
      
    </div>
  )
}

export default FormInput