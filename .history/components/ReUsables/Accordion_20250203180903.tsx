"use client";

import React, { useState } from "react";
import { AccordionData } from "@/utils";
import styles from "../../styles/ReUsables/accordion.module.scss";


interface Accordin
const Accordion = ({data}: ) => {
  const [activeItem, setActiveItem] = useState<number>(1);

  const toggleItem = (id: number) => {
    setActiveItem((prevActive) => (prevActive === id ? 0 : id));
  };

  return (
    <div className={styles.accordion}>
      {AccordionData.map((item) => (
        <div key={item.id} className={styles.accordionItem}>
          <div className={styles.header} onClick={() => toggleItem(item.id)}>
            <div className={styles.header__left}>
              <span className={styles.number}>{item.number}.</span>
            </div>
            <div className={styles.header__right}>
              <span className={styles.title}>{item.title}</span>
              {/* Icon container with two spans */}
              <div
                className={`${styles.icon} ${
                  activeItem === item.id ? styles.active : ""
                }`}
              >
                <span className={styles.horizontal}></span>
                <span className={styles.vertical}></span>
              </div>
            </div>
          </div>
          {/* Render the content only if the item is active
          {activeItem === item.id && ( */}
          <div
            className={`${styles.content} ${
              activeItem === item.id ? styles.active__content : ""
            }`}
          >
            <div className={styles.content__left}></div>
            <div className={styles.content__right}>
              <p>{item.content}</p>
            </div>
          </div>
          {/* )} */}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
