import React from 'react'
import Button from '../ReUsables/Button'
import ButtonHeader from '../ReUsables/ButtonHeader'
import ProjectSection from '../ReUsables/ProjectSection'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/HomePage/homeprojects.module.scss"

const HomeProjects = () => {
  const projectText = "Every project is a reflection of vision, purpose, and transformative impact."
  return (
    <section className={`section ${styles.project__section}`}>
      <div className={`container ${styles.project__container}`}>
        <div className={styles.project__wrapper}>
          <div className={styles.project__wrappertop}>
            <div className={styles.pwt__left}>
              <ButtonHeader text='Our case studies'/>
            </div>
            <div className={styles.pwt__right}>
              <HeroText maintext={projectText}/>
            </div>
          </div>
          <ProjectSection/>
          <div className={styles.project__button}>
            <Button text='Read all our case studies' color='black' link="/projects" size='normal'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeProjects