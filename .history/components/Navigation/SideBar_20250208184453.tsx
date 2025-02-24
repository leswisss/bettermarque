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

  const socialLinks = [
    {
      link: "/",
      name: "Instagram",
    },
    {
      link: "/",
      name: "Facebook",
    },
    {
      link: "/",
      name: "Youtube",
    },
    {
      link: "/",
      name: "Behance",
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
                <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512"><path fill="currentColor" fillRule="evenodd" d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"></path></svg>
                {/* <Icon icon="fluent-mdl2:cancel" /> */}
              </div>
            </div>
          </div>
          <div className={styles.sidebar__body}>
            <div className={styles.sideb__top}>
              {sideLinks.map((data, i) => (
                <p className={styles.sword__wrapper} key={i}>
                  <Link href={data.link} className={styles.slink}>
                    {data.name}
                  </Link>
                </p>
              ))}
            </div>
            <div className={styles.sideb__bottom}>
              <span className={styles.circle}></span>
              <div className={styles.bclock}>
                <span>Yaoundé, Cameroon</span>
                <Clock />
              </div>
            </div>
          </div>
          <div className={styles.side__footer}>
            <div className={styles.sf__top}>
              {socialLinks.map((data, i) => (
                <p className={styles.fword__wrapper} key={i}>
                  <Link href={data.link} className={styles.flink}>
                    {data.name}
                  </Link>
                </p>
              ))}
            </div>
            <div className={styles.sf__bottom}>
              <span>Better Marque ©2025 Edition</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
