"use client";

import React, { useRef } from "react";
import { StaticImageData } from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import ButtonHeader from "../ReUsables/ButtonHeader";
import ImagePlaceholder from "../ReUsables/ImagePlaceholder";
import Link from "next/link";
import Image from "next/image";
import Button from "../ReUsables/Button";
import HeroText from "../ReUsables/HeroText";
import styles from "../../styles/DetailsPage/otherdetails.module.scss";

interface ProjectDetailsProps {
  name?: string;
  link?: string;
  image?: StaticImageData;
}

interface DetailDataProps {
  mainText: string;
  secondaryText: string;
  link?: string; //Incase the detail to be shown is about the website, so this link is the link to the live site
}

interface ContentProps {
  headerButton: string;
  projectDetails?: ProjectDetailsProps;
  detailData?: DetailDataProps;
}

const OtherDetails = ({ content }: { content: ContentProps }) => {
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-75, 0]);

  return (
    <section className={`section ${styles.otherd__section}`}>
      <div className={`container ${styles.otherd__container}`}>
        <div className={styles.otherd__wrapper}>
          <div className={styles.otherd__left}>
            <ButtonHeader text={content.headerButton} />
          </div>
          {content.headerButton === "Next Project" && content.projectDetails ? (
            <div className={styles.otherd__right2}>
              {content.projectDetails.link && (
                <Link
                  href={content.projectDetails.link}
                  className={styles.otheri__container}
                  ref={container}
                >
                  <motion.div className={styles.otheri__wrapper} style={{ y }}>
                    {content.projectDetails.image &&
                      content.projectDetails.name && (
                        <Image
                      )}
                  </motion.div>
                </Link>
              )}
              {content.projectDetails.name && (
                <Button
                  color="black"
                  size="normal"
                  text={content.projectDetails.name}
                  link={content.projectDetails.link}
                  target="_blank"
                />
              )}
            </div>
          ) : (
            content.detailData && (
              <div className={styles.otherd__right}>
                <HeroText maintext={content.detailData.mainText} />
                <div className={styles.otherd__bottom}>
                  <p className={styles.otherd__text}>
                    {content.detailData.secondaryText}
                  </p>
                  {content.detailData.link && (
                    <Button
                      color="black"
                      size="normal"
                      text="Visit live site"
                      link={content.detailData.link}
                      target="_blank"
                    />
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OtherDetails;
