import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/DetailsPage/otherdetails.module.scss"

const OtherDetails = () => {
  const mainText = ""
  return (
    <section className={`section ${styles.otherd__section}`}>
      <div className={`container ${styles.otherd__container}`}>
        <div className={styles.otherd__wrapper}>
          <div className={styles.otherd__left}>
            <ButtonHeader text='The solution'/>
          </div>
          <div className={styles.otherd__right}>
            <HeroText />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherDetails