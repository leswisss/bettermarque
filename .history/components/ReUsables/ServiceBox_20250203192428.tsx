import React from "react";
import styles from "../../styles/ReUsables/servicebox.module.scss";

const ServiceBox = () => {
  return (
    <div className={styles.servicebox}>
      <div className={styles.sb__top}>
        <div className={styles.sbt__left}>
          <div className={styles.overflow}>
            <span>01</span>
          </div>
        </div>
        <div className={styles.sbt__right}>
          <div className={styles.overflow}>
            <h1>BRAND IDENTITY</h1>
          </div>
        </div>
      </div>
      <div className={styles.sb__bottom}>
        <div className={styles.sbb__left}>
          <div className={styles.image__container}>
            <div className="">

            </div>
          </div>
        </div>
        <div className={styles.sbb__right}>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceBox;
