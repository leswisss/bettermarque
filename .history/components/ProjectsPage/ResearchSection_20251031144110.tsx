import React from "react";
import ProjectBox from "../ReUsables/ProjectBox";
import { ResearchContent } from "@/research";
import styles from "../../styles/ReUsables/projectsection.module.scss";

const ResearchSection = () => {
  return (
    <div className={styles.projects__wrapper}>
      {ResearchContent.map((data, i) => (
        <ProjectBox key={i} content={data.projectBox} research={}/>
      ))}
    </div>
  );
};

export default ResearchSection;
