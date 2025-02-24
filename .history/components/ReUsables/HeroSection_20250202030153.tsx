import React from "react";
import Button from "./Button";
import Image from "next/image";
import { HeroProps } from "@/types";
import Lenis from "lenis";
import ButtonHeader from "./ButtonHeader";
import styles from "../../styles/ReUsables/hero.module.scss";
import InfiniteMarquee from "../HomePage/InfiniteMarquee";

const HeroSection = ({
  content,
  infinitemarquee,
  lenis,
  reference
}: {
  content: HeroProps;
  infinitemarquee?: boolean;
  lenis?: Lenis | null;
  reference?: React.RefObject<HTMLDivElement | null>;
}) => {

  const splitWords = (phrase: string): string[] => {
    return phrase.split(" ");
  };


  const handleLenisScroll = () => {
    if (lenis && reference.current) {
      const referenceTop =
        window.scrollY + reference.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop);
    }
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
                    src={content.projectinfo.image}
                    fill
                    quality={100}
                    alt={content.projectinfo.name}
                  />
                </div>
                <div className={styles.separator} />
                <div className={styles.project__name}>
                  {content.projectinfo.name}
                </div>
              </div>
            )}
            <div className={styles.hero__maintext}>
              {splitWords(content.herotext).map((word, i) => (
                <p className={styles.word__wrapper} key={i}>
                  <span>{word}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {infinitemarquee && (
        <div className={styles.hero__marquee}>
          <InfiniteMarquee />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
