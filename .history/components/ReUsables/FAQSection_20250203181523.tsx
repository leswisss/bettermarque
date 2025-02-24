import React from 'react'
import Accordion from './Accordion'
import { AccordionData } from '@/utils'
import Button from './Button'
import styles from "../../styles/ReUsables/faqsection.module.scss"

const FAQSection = () => {
  return (
    <section className={`section ${styles.faq__section}`}>
      <div className={`container ${styles.faq__container}`}>
        <div className={styles.faq__wrapper}>
          <div className={styles.faqw__left}>

          </div>
          <div className={styles.faqw__right}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection