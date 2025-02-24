import React from "react";
import ProjectBox from "./ProjectBox";
import { ProjectsData } from "@/utils";
import styles from "../../styles/ReUsables/projectsection.module.scss";

const ProjectSection = () => {
  return (
    <div className={styles.projects__wrapper}>
      {ProjectsData.map(() => (
        <ProjectBox />
      ))}
    </div>
  );
};

export default ProjectSection;
