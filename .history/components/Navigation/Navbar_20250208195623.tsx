"use client";

import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { NavMenu } from "@/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import Button from "../ReUsables/Button";
import SideBar from "./SideBar";
import Link from "next/link";
import Clock from "./Clock";
import WORDMARK from "../../public/svg/wordmark.svg";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  const [activeSide, setActiveSide] = useState(false);

  //Used to get the current pathname so that I can chnage the colors of the menu's rescpectively
  const pathname = usePathname();

  const navbar = useRef<HTMLHeadElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const navigation = navbar.current;

      if (navigation) {
        let lastScroll = 0;

        ScrollTrigger.create({
          start: "top+=300 top",
          end: "bottom bottom",
          onUpdate: (self) => {
            if (self.direction === -1 && self.scroll() < lastScroll) {
              gsap.to(".nav__opacity", { opacity: 1 });
            } else {
              gsap.to(".nav__opacity", { opacity: 0 });
            }
            lastScroll = self.scroll();
          },
          scrub: 0.3,
        });
      }
    },
    { scope: navbar }
  );

  return (
    <>
      <header className={styles.navigation} ref={navbar}>
        <div className={`container ${styles.navigation__container}`}>
          <div className={styles.navigation__wrapper}>
            <div className={styles.nav__left}>
              {pathname === "/" ? (
                <span className={`${styles.nav__agency}`}>
                  Yaoundé Based Strategic
                  <br />
                  Branding Agency
                </span>
              ) : (
                <Link href="/" className={styles.nav__image}>
                  <Image
                    fill
                    quality={100}
                    alt="BetterMarque Wordmark"
                    src={WORDMARK}
                  />
                </Link>
              )}
            </div>
            <div className={styles.nav__right}>
              <div className={`${styles.nav__rightl}`}>
                <div className={styles.nav__menu}>
                  {NavMenu.map((data, i) => (
                    <Link
                      key={data.id}
                      href={data.link}
                      className={`${
                        pathname === data.link ? styles.white : ""
                      }`}
                    >
                      {data.name}
                    </Link>
                  ))}
                </div>
                <div className={styles.nav__time}>
                  <Clock />
                  <span>Yaoundé, Cameroon</span>
                </div>
              </div>
              <div className={styles.nav__rightr}>
                <Button
                  link="/contact"
                  text="Start a project"
                  color="white"
                  size="normal"
                />
                <div className={styles.menu__button}>
                  <span>Menu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {activeSide && (
          <SideBar
            activeSide={activeSide}
            setActiveSide={setActiveSide}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
