import React from 'react'
import ProjectBox from './ProjectBox'
import Project
import styles from "../../styles/ReUsables/projectsection.module.scss"

const ProjectSection = () => {
  return (
    <div className={styles.projects__wrapper}>
      <ProjectBox/>
      <ProjectBox/>
      <ProjectBox/>
      <ProjectBox/>
    </div>
  )
}

export default ProjectSection