"use client";

import React, {RefObject} from 'react'
import styles from "../../styles/ProjectsPage/projectscontainer.module.scss"
import ResearchSection from './ResearchSection';


const ResearchContainer = ({ref}: {ref:  RefObject<HTMLDivElement | null>}) => {

  return (
    <section className={`section ${styles.pc__section}`} ref={ref}>
      <div className={`container ${styles.pc__container}`}>
        <div className={styles.pc__wrapper}>
          <ProjectSection home={false}/>
        </div>
      </div>
    </section>
  )
}

export default ResearchContainer