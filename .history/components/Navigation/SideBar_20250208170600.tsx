import React from "react";
import Image from "next/image";
import Link from "next/link";
import WORDMARK from "../../public/svg/wordmark.svg";
import styles from "../../styles/Navigation/sidebar.module.scss";
import { div } from "framer-motion/client";

const SideBar = () => {
  const sideLinks = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/projects",
      name: "Work",
    },
    {
      link: "/about",
      name: "About",
    },
    {
      link: "/services",
      name: "Services",
    },
    {
      link: "/contact",
      name: "Contact",
    },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__wrapper}>
        <div className={`container ${styles.side__container}`}>
        
            <div className={styles.side__header}>
              <div className={styles.sideh__left}>
                <div className={styles.si__wrapper}>
                  <Image
                    fill
                    quality={100}
                    src={WORDMARK}
                    alt="Better Marque Branding Agency"
                  />
                </div>
              </div>
              <div className={styles.sideh__right}>
                <span className={styles.close__text}>Close</span>
                <div className={styles.x__wrapper}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className={styles.side__body}>
              <div className={styles.sideb__top}>
                {sideLinks.map((data, i) => (
                  <div className={styles.sword__container} key={i}>
                    <p className={styles.sword__wrapper}>
                      <Link href={data.link}>{data.name}</Link>
                    </p>
                  </div>
                ))}
              </div>
              <div className={styles.sideb__bottom}></div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default SideBar;
