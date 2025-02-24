import React from 'react'
import ProjectBox from './ProjectBox'
import styles from "../../styles/ReUsables/projectsection.module.scss"

const ProjectSection = () => {
  return (
    <div className={styles.projects__wrapper}>
      <ProjectBox/>
    </div>
  )
}

export default ProjectSection