import React from "react";
import Button from "./Button";
import ButtonHeader from "./ButtonHeader";
import HeroText from "./HeroText";
import styles from "../../styles/ReUsables/getintouch.module.scss";

interface ButtonProps {
  color: string;
  link: string;
  text: string;
}

interface ContentProps {
  mainText: string;
  buttonText: string;
  buttonDetails: ButtonProps;
}

const ThreeInfoSection = ({ content }: { content: ContentProps }) => {
  return (
    <section className={`section ${styles.intouch__section}`}>
      <div className={`container ${styles.intouch__container}`}>
        <div className={styles.intouch__wrapper}>
          <div className={styles.intouch__left}>
            <ButtonHeader text={content.buttonText} />
          </div>
          <div className={styles.intouch__right}>
            <HeroText maintext={content.mainText} />
            <div className={styles.inbutton}>
              <Button
                color={content.buttonDetails.color}
                link={content.buttonDetails.link}
                text={content.buttonDetails.text}
                size="normal"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeInfoSection;
