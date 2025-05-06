import React, { Fragment } from "react";
import ButtonHeader from "../ReUsables/ButtonHeader";
import HeroText from "../ReUsables/HeroText";
import Button from "../ReUsables/Button";
import Link from "next/link";
import styles from "../../styles/DetailsPage/projectbrief.module.scss";

interface ProjectSpec {
  heading: string;
  text?: string;
  info?: {
    name: string;
    link: string;
  }[];
}

interface ProjectBrief {
  mainText: string;
  briefText: string;
  projectSpecs: ProjectSpec[];
  liveLink?: {
    link: string;
    text: string;
  };
}

const ProjectBrief = ({ content }: { content: ProjectBrief }) => {
  return (
    <section className={`section ${styles.brief__section}`}>
      <div className={`container ${styles.brief__container}`}>
        <div className={styles.brief__wrapper}>
          <div className={styles.brief__left}>
            <ButtonHeader text="Project brief" />
          </div>
          <div className={styles.brief__right}>
            <HeroText maintext={content.mainText} />
            <div className={styles.brief__bottom}>
              <p className={styles.brief__text}>{content.briefText}</p>
              <div className={styles.project__specs}>
                <span className={styles.specs__header}>PROJECT SPECS</span>
                <div className={styles.specs__wrapper}>
                  {content.projectSpecs.map((data, i) => (
                    <div className={styles.spec__box} key={i}>
                      <span>{data.heading}</span>
                      <span>{data.text}</span>
                      {data.info && (
                        <span className={styles.sb_collab}>
                          {(data.info ?? []).map((item, i, arr) => (
                            <Fragment key={item.name + i}>
                              <Link
                                href={item.link}
                                target="_blank"
                                className={styles.sbc_a}
                              >
                                {item.name}
                              </Link>
                              {/* only render comma if this isn’t the last element */}
                              {i < arr.length - 1 && ", "}
                            </Fragment>
                          ))}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {content.liveLink && (
                <Button
                  color="black"
                  size="normal"
                  target="_blank"
                  link={content.liveLink.link}
                  text={content.liveLink.text}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBrief;
