"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Image from "next/image";
import { HeroProps } from "@/types";
import Lenis from "lenis";
import ButtonHeaderMain from "./ButtonHeaderMain";
import HeroTextMain from "./HeroTextMain";
import InfiniteMarquee from "../HomePage/InfiniteMarquee";
import styles from "../../styles/ReUsables/hero.module.scss";

const HeroSection = ({
  content,
  infinitemarquee,
  lenis,
  reference,
  animationFinished,
}: {
  content: HeroProps;
  infinitemarquee?: boolean;
  lenis?: Lenis | null;
  reference?: React.RefObject<HTMLDivElement | null>;
  animationFinished: boolean;
}) => {
  const pathname = usePathname();

  const handleLenisScroll = () => {
    if (lenis && reference?.current) {
      const referenceTop =
        window.scrollY + reference?.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop);
    }
  };

  return (
    <section className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__bottom}>
          <div
            className={`${styles.hb__left} ${
              animationFinished ? styles.button__visi : ""
            } ${pathname === "/" ? styles.moredelay : styles.normaldelay}`}
          >
            {pathname !== "/contact" &&
            pathname !== "/projects" &&
            !pathname.includes("/projects/") &&
            !pathname.includes("/research/") &&
            pathname !== "/projects" ? (
              <Button
                link={content.linkbutton.link}
                text={content.linkbutton.text}
                color={content.linkbutton.color}
                size="normal"
              />
            ) : (
              <Button
                text={content.linkbutton.text}
                color={content.linkbutton.color}
                size="normal"
                onClick={handleLenisScroll}
              />
            )}
          </div>
          <div className={styles.hb__right}>
            {content.buttonheadertext && (
              <ButtonHeaderMain
                text={content.buttonheadertext}
                animationFinished={animationFinished}
              />
            )}
            {content.projectinfo && (
              <div
                className={`${styles.hero__project} ${
                  animationFinished ? styles.active__pro : ""
                }`}
              >
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
            <HeroTextMain
              maintext={content.herotext}
              animationFinished={animationFinished}
              pathname={pathname}
            />
          </div>
        </div>
      </div>
      {infinitemarquee && (
        <div className={`${styles.hero__marquee}`}>
          <div
            className={`${styles.hero__marqueee} ${
              animationFinished ? styles.active__marquee : ""
            }`}
          >
            <InfiniteMarquee />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
