import React from "react";
import Button from "./Button";
import ButtonHeader from "./ButtonHeader";
import styles from "../../styles/ReUsables/hero.module.scss";

const HeroSection = () => {

  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };

  return (
    <section className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__bottom}>
          <div className={styles.hb__left}>
            <Button link="/about" text="Learn more about us" color="black"/>
          </div>
          <div className={styles.hb__right}>
            {<ButtonHeader text="Love your self" />
          </div>
        </div>
        <div className={styles.hero__marquee}>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
