import React from "react";
import Button from "./Button";
import Image from "next/image";
import TESTIMAGE from "../../public/svg/testproject.svg"
import ButtonHeader from "./ButtonHeader";
import styles from "../../styles/ReUsables/hero.module.scss";

const HeroSection = () => {
  const phrase = "Empowering Architects, Civil Engineers and Realtors with exceptional creative solutions designed to captivate and bring their unique visions to life."
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
            {/* <ButtonHeader text="Get to know us" /> */}
            <div className={styles.hero__project}>
              <div className={styles.project__image}>
                <Image src={TESTIMAGE} fill/>
              </div>
              <div className={styles.separator} />
              <div className={styles.project__name}>Brinovo Urbano</div>
            </div>
            <div className={styles.hero__maintext}>
              {splitWords(phrase).map((word, i) => (
                <p className={styles.word__wrapper} key={i}>
                  <span>{word}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.hero__marquee}>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
