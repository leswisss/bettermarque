"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { sideBarAnim, sideBarLinkAnim } from "@/animations";
import Clock from "./Clock";
import WORDMARK from "../../public/svg/wordmark.svg";
import styles from "../../styles/Navigation/sidebar.module.scss";


export interface sideBarProps {
  activeSide: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ activeSide, setActiveSide }: sideBarProps) => {
  //Used to get the current pathname so that I can chnage the colors of the menu's rescpectively
  const pathname = usePathname();

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
    <motion.div className={styles.sidebar}>
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
                  <Link href={data.link} className={`${styles.slink} ${
                        pathname === data.link ? styles.white : ""
                      }`}>
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
    </motion.div>
  );
};

export default SideBar;
