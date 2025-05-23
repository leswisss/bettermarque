import React from "react";
import { ServicesData } from "@/utils";
import ButtonHeader from "./ButtonHeader";
import ServiceBox from "./ServiceBox";
import HeroText from "./HeroText";
import styles from "../../styles/ReUsables/services.module.scss";

const Services = () => {
  const mainText =
    "Strengthening your brand with the art of Design and the power of Execution.";
  return (
    <section className={`section ${styles.services__section}`}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.services__wrapper}>
          <div className={styles.services__top}>
            <div className={styles.services__left}>
              <ButtonHeader text="Our services" />
            </div>
            <div className={styles.services__right}>
              <HeroText maintext={mainText} />
            </div>
          </div>
          <div className={styles.services__bottom}>
            {ServicesData.map((data, i) => {
              //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  return ( )
              <div className={styles.service__wrapper} key={i}>
                <div className={styles.service__holder}>
                  <ServiceBox content={data} />
                </div>
              </div>
          })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
