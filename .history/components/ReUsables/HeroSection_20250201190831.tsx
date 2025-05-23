import React from "react";
import Button from "./Button";
import Image from "next/image";
import TESTIMAGE from "../../public/svg/testproject.svg";
import { HomeHeroProps } from "@/types";
import ButtonHeader from "./ButtonHeader";
import styles from "../../styles/ReUsables/hero.module.scss";

const HeroSection = ({ content }: { content: HomeHeroProps }) => {
  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };

  return (
    <section className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__bottom}>
          <div className={styles.hb__left}>
            <Button
              link={content.linkbutton.link}
              text={content.linkbutton.text}
              color={content.linkbutton.color}
            />
          </div>
          <div className={styles.hb__right}>
            {content.buttonheadertext && (
              <ButtonHeader text={content.buttonheadertext} />
            )}
            {content.projectinfo && (
              <div className={styles.hero__project}>
                <div
                  className={styles.project__image}
                  style={{ aspectRatio: content.projectinfo.aspectratio }}
                >
                  <Image
                    src={content.}
                    fill
                    quality={100}
                    alt="Brinovo Urbano"
                  />
                </div>
                <div className={styles.separator} />
                <div className={styles.project__name}>Brinovo Urbano</div>
              </div>
            )}
            <div className={styles.hero__maintext}>
              {splitWords(phrase).map((word, i) => (
                <p className={styles.word__wrapper} key={i}>
                  <span>{word}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.hero__marquee}></div>
      </div>
    </section>
  );
};

export default HeroSection;
