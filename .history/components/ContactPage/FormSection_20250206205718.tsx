"use client";

import React, {RefObject, useRef} from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import { FormFieldsData } from '@/utils'
import FormInput from './FormInput'
import { Icon } from "@iconify/react";
import styles from "../../styles/ContactPage/formsection.module.scss"

const FormSection = ({ref}: {ref:  RefObject<HTMLDivElement | null>}) => {

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const formData = new FormData(event.currentTarget);
  
    // Retrieve form fields
    const fullname = formData.get("fullname") as string | null;
    const companyemail = formData.get("companyemail") as string | null;
    const companyname = formData.get("companyname") as string | null;
    const companywebsite = formData.get("companywebsite") as string | null;
    const projectscope = formData.get("projectscope") as string | null;
  
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          companyemail,
          companyname,
          companywebsite,
          projectscope,
        }),
      });
  
      const content = await response.json();
      console.log(content);
  
      alert(content.data.tableRange);
  
      // Delay form reset after async operation completes
      setTimeout(() => {
        formRef.
      }, 100);
    } catch (error) {
      console.error("Error during form submission", error);
    }
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
              <form onSubmit={handleSubmit} ref={formRef}>
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