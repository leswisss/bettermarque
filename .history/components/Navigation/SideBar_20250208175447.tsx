import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Clock from "./Clock";
import WORDMARK from "../../public/svg/wordmark.svg";
import styles from "../../styles/Navigation/sidebar.module.scss";

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
        <div className={`container ${styles.sidebar__container}`}>
          <div className={styles.sidebar__header}>
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
              <div className={styles.sidehr__wrapper}>
                <span className={styles.close__text}>Close</span>
                <Icon icon="fluent-mdl2:cancel" />
              </div>
            </div>
          </div>
          <div className={styles.sidebar__body}>
            <div className={styles.sideb__top}>
              {sideLinks.map((data, i) => (
                <p className={styles.sword__wrapper} key={i}>
                  <Link href={data.link} className={styles.slink} >{data.name}</Link>
                </p>
              ))}
            </div>
            <div className={styles.sideb__bottom}><span className={styles.circle}></span><div></div><span>Yaoundé, Cameroon</span><Clock/></div>
          </div>
          <div className={styles.side__footer}></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
