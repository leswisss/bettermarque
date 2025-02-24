import React from 'react'
import Button from './Button'
import Accordion from './Accordion'
import HeroText from './HeroText'
import ButtonHeader from './ButtonHeader'
import { AccordionData } from "@/utils";
import styles from "../../styles/ReUsables/ourapproach.module.scss"

const OurApproach = () => {
  const approachText = "A thoughtful, values-driven approach to building impactful identities that resonate, inspire, and lead."

  return (
    <section className={`section ${styles.approach__section}`}>
      <div className={`container ${styles.approach__container}`}>
        <div className={styles.approach__wrapper}>
          <div className={styles.approach__left}>
            <ButtonHeader text='Our Approach'/>
          </div>
          <div className={styles.approach__right}>
            <HeroText maintext={approachText}/>
            <div className={styles.approachr__bottom}>
              <Accordion data={Acc}/>
              <div className={styles.button__wrapper}>
                <Button link='/services' text='Discover our branding solutions' color='black'/>
                <Button link='/projects' text="See how we've made an impact" color='black'/>
                <Button link='/contact' text='Start a project' color='black'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurApproach