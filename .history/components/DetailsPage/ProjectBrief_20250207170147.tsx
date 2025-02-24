import React from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import HeroText from '../ReUsables/HeroText'
import styles from "../../styles/DetailsPage/projectbrief.module.scss"


const ProjectBrief = () => {
  const mainText = "Brinovo Urbano specializes in creating sustainable urban landscapes that redefine modern city living."
  const briefText = "As a forward-thinking firm, Brinovo Urbano prioritizes eco-conscious solutions that enhance urban ecosystems. They specialize in blending functionality and aesthetics, creating spaces that harmonize with the environment while meeting the needs of modern communities. Their commitment to sustainability ensures cities evolve responsibly, preserving ecological balance for future generations."
  
  const projectSpecs = [
    {
      heading: "Type",
      text: 'Rebranding'
    },
    {
      heading: "Category",
      text: 'Architecture'
    },
    {
      heading: "Services",
      text: 'Strategy, Visual Identity, Messaging'
    }
  ]


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
              <p className={styles.brief__text}>{briefText}</p>
              <div className={styles.project__specs}>
                <span className={styles.specs__header}>PROJECT SPECS</span>
                {
                  projectSpecs.map(() => (
                    <div className={styles.spec}>

                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBrief