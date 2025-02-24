"use client";

import React, {RefObject} from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import { FormFieldsData } from '@/utils'
import FormInput from './FormInput'
import { Icon } from "@iconify/react";
import styles from "../../styles/ContactPage/formsection.module.scss"

const FormSection = ({ref}: {ref:  RefObject<HTMLDivElement | null>}) => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const formData = new FormData(event.currentTarget);

    // Now you can retrieve form fields:
    const fullname = formData.get("fullname") as string | null;
    const email = formData.get("companyemail") as string | null;


    const response = await fetch("localhost:3000/api", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    const content = await response



    // console.log(formData);

    // //reset the form
    // event.currentTarget.reset();
  };

  return (
    <section className={`section ${styles.form__section}`} ref={ref}>
      <div className={`container ${styles.form__container}`}>
        <div className={styles.form__wrapper}>
          <div className={styles.form__left}>
            <ButtonHeader text="Contact form"/>
          </div>
          <div className={styles.form__right}>
            <div className={styles.mform__wrapper}>
              <form onSubmit={handleSubmit}>
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