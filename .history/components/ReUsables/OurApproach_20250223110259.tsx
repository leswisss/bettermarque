"use client";

import React from 'react'
import Button from './Button'
import Accordion from './Accordion'
import { usePathname } from 'next/navigation';
import HeroText from './HeroText'
import ButtonHeader from './ButtonHeader'
import { AccordionData } from "@/utils";
import styles from "../../styles/ReUsables/ourapproach.module.scss"

const OurApproach = () => {
  const approachText = "A thoughtful, values-driven approach to building impactful identities that resonate, inspire, and lead."
  const pathName = usePathname();

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
              <Accordion data={AccordionData}/>
              <div className={styles.button__wrapper}>
                {
                  pathName
                }
                <Button size='normal' link='/services' text='Discover our branding solutions' color='black'/>
                <Button size='normal' link='/projects' text="See how we've made an impact" color='black'/>
                <Button size='normal' link='/contact' text='Start a project' color='black'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurApproach