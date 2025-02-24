import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import Button from '../ReUsables/Button'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/DetailsPage/otherdetails.module.scss"

const OtherDetails = () => {
  const mainText = "We created a cohesive brand identity and an intuitive website for Brinovo Urbano, transforming how they connect with their audience."
  const otherText = "The brand identity established a strong, recognizable presence, while the website streamlined communication and showcased their projects effectively. This elevated their credibility, expanded their reach, and positioned them as leaders in sustainable urban development."

  return (
    <section className={`section ${styles.otherd__section}`}>
      <div className={`container ${styles.otherd__container}`}>
        <div className={styles.otherd__wrapper}>
          <div className={styles.otherd__left}>
            <ButtonHeader text='The solution'/>
          </div>
          <div className={styles.otherd__right}>
            <HeroText maintext={mainText} />
            <div className={styles.otherd__bottom}>
              <p>{otherText}</p>
              <Button color='black' size='normal' text='Visit live site'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherDetails