import React from "react";
import ProjectBox from "./ProjectBox";
import { ProjectsContent } from "@/projects";
import styles from "../../styles/ReUsables/projectsection.module.scss";

const ProjectSection = () => {
  return (
    <div className={styles.projects__wrapper}>
      {ProjectsContentmap((data, i) => (
        <ProjectBox key={i} content={data.projectBox} />
      ))}
    </div>
  );
};

export default ProjectSection;
