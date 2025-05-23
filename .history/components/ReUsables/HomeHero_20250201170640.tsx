import React from "react";
import Button from "./Button";
import styles from "../../styles/HomePage/hero.module.scss";

const HomeHero = () => {
  return (
    <section className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}></div>
    </section>
  );
};

export default HomeHero;
