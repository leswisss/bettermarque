import React from "react";
import ProjectBox from "./ProjectBox";
import { ProjectsContent } from "@/projects";
import styles from "../../styles/ReUsables/projectsection.module.scss";

const ProjectSection = ({home}: {home: boolean}) => {
  return (
    <div className={styles.projects__wrapper}>
      {
        home ? 

        {ProjectsContent.slice(0, 4).map((data, i) => (
          <ProjectBox key={i} content={data.projectBox} />
        ))} : {ProjectsContent.slice(0, 4).map((data, i) => (
          <ProjectBox key={i} content={data.projectBox} />
        ))}
      }
    </div>
  );
};

export default ProjectSection;
