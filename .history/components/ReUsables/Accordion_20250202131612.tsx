// components/Accordion.tsx
"use client";

import React, { useState } from "react";
import styles from "../../styles/ReUsables/accordion.module.scss";

// Define the structure of each accordion item
interface AccordionItem {
  id: number;
  number: string; // e.g., "01", "02", etc.
  title: string;
  content: string;
}

// Data for the accordion items (5 items)
const accordionData: AccordionItem[] = [
  {
    id: 1,
    number: "01",
    title: "Accordion Item One",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Item one content.",
  },
  {
    id: 2,
    number: "02",
    title: "Accordion Item Two",
    content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur. Item two content.",
  },
  {
    id: 3,
    number: "03",
    title: "Accordion Item Three",
    content: "Donec id elit non mi porta gravida at eget metus. Item three content.",
  },
  {
    id: 4,
    number: "04",
    title: "Accordion Item Four",
    content: "Nullam id dolor id nibh ultricies vehicula ut id elit. Item four content.",
  },
  {
    id: 5,
    number: "05",
    title: "Accordion Item Five",
    content: "Maecenas faucibus mollis interdum. Item five content.",
  },
];

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
              <span className={styles.number}>{item.number}</span>
            </div>
  
            <div className={styles.header__right}>

            </div>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.icon}>
              {activeItem === item.id ? "–" : "+"}
            </span>
          </div>
          {/* Render the content only if the item is active */}
          {activeItem === item.id && (
            <div className={styles.content}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
