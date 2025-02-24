import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/DetailsPage/projectbrief.module.scss"

const ProjectBrief = () => {
  return (
    <section className={`section ${styles.brief__section}`}>
      <div className={`container ${styles.brief__container}`}>
        <div className={styles.brief__wrapper}>
          <div className={styles.brief__left}>
            <ButtonHeader text='Project brief'/>
          </div>
          <div className={styles.brief__right}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBrief