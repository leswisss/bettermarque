import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/DetailsPage/projectbrief.module.scss"

const ProjectBrief = () => {
  const mainText = "Brinovo Urbano specializes in creating sustainable urban landscapes that redefine modern city living."
  return (
    <section className={`section ${styles.brief__section}`}>
      <div className={`container ${styles.brief__container}`}>
        <div className={styles.brief__wrapper}>
          <div className={styles.brief__left}>
            <ButtonHeader text='Project brief'/>
          </div>
          <div className={styles.brief__right}>
            <HeroText maintext={mainText}/>
            <div className={styles.brief__bottom}>
              <p className={styles.}></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBrief