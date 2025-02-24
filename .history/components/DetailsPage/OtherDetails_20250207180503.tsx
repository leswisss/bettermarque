import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/DetailsPage/otherdetails.module.scss"

const OtherDetails = () => {
  const mainText = "We created a cohesive brand identity and an intuitive website for Brinovo Urbano, transforming how they connect with their audience."
  return (
    <section className={`section ${styles.otherd__section}`}>
      <div className={`container ${styles.otherd__container}`}>
        <div className={styles.otherd__wrapper}>
          <div className={styles.otherd__left}>
            <ButtonHeader text='The solution'/>
          </div>
          <div className={styles.otherd__right}>
            <HeroText maintext={mainText} />
            di
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherDetails