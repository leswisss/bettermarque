"use client";

import React, { useState } from "react";
import { AccordionData } from "@/utils";
import styles from "../../styles/ReUsables/accordion.module.scss";

interface AccordionItem {
  id: number;
  number: string; 
  title: string;
  content: string;
}


const Accordion = () => {
  const [activeItem, setActiveItem] = useState<number>(1);

  // Toggle the active state: if clicking the active item, close it; otherwise open the new item.
  const toggleItem = (id: number) => {
    setActiveItem((prevActive) => (prevActive === id ? 0 : id));
  };

  return (
    <div className={styles.accordion}>
      {accordionData.map((item) => (
        <div key={item.id} className={styles.accordionItem}>
          <div className={styles.header} onClick={() => toggleItem(item.id)}>
            <div className={styles.header__left}>
              <span className={styles.number}>{item.number}.</span>
            </div>
            <div className={styles.header__right}>
              <span className={styles.title}>{item.title}</span>
              <span className={styles.icon}>
                {activeItem === item.id ? "–" : "+"}
              </span>
            </div>
          </div>
          {/* Render the content only if the item is active */}
          {activeItem === item.id && (
            <div className={styles.content}>
              <div className={styles.content__left}></div>
              <div className={styles.content__right}>
                <p>{item.content}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
