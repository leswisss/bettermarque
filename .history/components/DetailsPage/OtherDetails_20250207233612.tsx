import React from "react";
import { StaticImageData } from "next/image";
import ButtonHeader from "../ReUsables/ButtonHeader";
import Image from "next/image";
import Button from "../ReUsables/Button";
import IMAGE from "../../public/images/ferrocore.jpg";
import HeroText from "../ReUsables/HeroText";
import styles from "../../styles/DetailsPage/otherdetails.module.scss";

interface ProjectDetailsProps {
  name: string;
  link: string;
  image: StaticImageData;
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
  const mainText =
    "We created a cohesive brand identity and an intuitive website for Brinovo Urbano, transforming how they connect with their audience.";
  const otherText =
    "The brand identity established a strong, recognizable presence, while the website streamlined communication and showcased their projects effectively. This elevated their credibility, expanded their reach, and positioned them as leaders in sustainable urban development.";

  return (
    <section className={`section ${styles.otherd__section}`}>
      <div className={`container ${styles.otherd__container}`}>
        <div className={styles.otherd__wrapper}>
          <div className={styles.otherd__left}>
            <ButtonHeader text={content.headerButton} />
          </div>
          {content.headerButton === "Next Project" && content.projectDetails ? (
            <div className={styles.otherd__right2}>
              <div className={styles.otheri__container}>
                <div className={styles.otheri__wrapper}>
                  <Image fill quality={100} alt={content.projectDetails.name} src={content.projectDetails.image} />
                </div>
              </div>
              <Button
                color="black"
                size="normal"
                text={content.projectDetails.name
                }
                link={content.projectDetails.link}
                target="_blank"
              />
            </div>
          ) : (
            <div className={styles.otherd__right}>
              <HeroText maintext={content.detailData.mainText} />
              <div className={styles.otherd__bottom}>
                <p className={styles.otherd__text}>{content.detailData.secondaryText}</p>
                {
                  content.detailData.link ?
                }
                <Button
                  color="black"
                  size="normal"
                  text="Visit live site"
                  link="https://www.bettermarque.com"
                  target="_blank"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OtherDetails;
