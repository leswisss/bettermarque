import React from "react";
import Button from "./Button";
import styles from "../../styles/ReUsables/hero.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__bottom}>
          <div className={styles.hb__left}>
            <Button link=""/>
          </div>
          <div className={styles.hb__right}>

          </div>
        </div>
        <div className={styles.hero__marquee}>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
