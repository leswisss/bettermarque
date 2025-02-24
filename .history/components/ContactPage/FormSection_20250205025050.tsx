"use client";

import React, {RefObject} from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import { FormFieldsData } from '@/utils'
import FormInput from './FormInput'
import { Icon } from "@iconify/react";
import styles from "../../styles/ContactPage/formsection.module.scss"

const FormSection = ({ref}: {ref:  RefObject<HTMLDivElement | null>}) => {

  const FormAction = async(formData: FormData) => {
    const fullname = formData.get("fullname");
    const email = formData.get("companyemail")
    const email = formData.get("companyemail")
    const email = formData.get("companyemail")
    

    console.log(`${fullname} ${email}`)
  }

  return (
    <section className={`section ${styles.form__section}`} ref={ref}>
      <div className={`container ${styles.form__container}`}>
        <div className={styles.form__wrapper}>
          <div className={styles.form__left}>
            <ButtonHeader text="Contact form"/>
          </div>
          <div className={styles.form__right}>
            <div className={styles.mform__wrapper}>
              <form action={FormAction}>
                {
                  FormFieldsData.map((data, i) => (
                    <FormInput data={data} key={i}/>
                  ))
                }
                <button className={styles.submit} type='submit'><span>Submit form</span> <span><Icon icon="mdi-light:arrow-up"/></span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSection