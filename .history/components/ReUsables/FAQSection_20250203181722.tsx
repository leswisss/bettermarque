import React from 'react'
import Accordion from './Accordion'
import { AccordionData } from '@/utils'
import HeroText from './HeroText'
import ButtonHeader from './ButtonHeader'
import styles from "../../styles/ReUsables/faqsection.module.scss"

const FAQSection = () => {
  const mainText = "Here are comprehensive insights answered to guide and support your journey with us."
  return (
    <section className={`section ${styles.faq__section}`}>
      <div className={`container ${styles.faq__container}`}>
        <div className={styles.faq__wrapper}>
          <div className={styles.faqw__left}>
            <ButtonHeader text='Frequently Asked Questions'/>
          </div>
          <div className={styles.faqw__right}>
            <HeroText maintext={mainText}/>
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection