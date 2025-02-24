import React from "react";
import { StaticImageData } from "next/image";
import ButtonHeader from "../ReUsables/ButtonHeader";
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
  return (
    <section className={`section ${styles.otherd__section}`}>
      <div className={`container ${styles.otherd__container}`}>
        <div className={styles.otherd__wrapper}>
          <div className={styles.otherd__left}>
            <ButtonHeader text={content.headerButton} />
          </div>
          {content.headerButton === "Next Project" && content.projectDetails ? (
            <div className={styles.otherd__right2}>
              <Link href={content.projectDetails.link} className={styles.otheri__container}>
                <div className={styles.otheri__wrapper}>
                  {
                    content.projectDetails.name && co
                  }
                  <Image
                    fill
                    quality={100}
                    alt={content.projectDetails.name}
                    src={content.projectDetails.image}
                  />
                </div>
              </Link>
              <Button
                color="black"
                size="normal"
                text={content.projectDetails.name}
                link={content.projectDetails.link}
                target="_blank"
              />
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
