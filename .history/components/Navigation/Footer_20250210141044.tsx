"use client";

import React, { useRef } from "react";
import Image from "next/image";
import IMAGE from "../../public/images/wordmark_1.png";
import IMAGE2 from "../../public/images/brandmark_1.png";
import Button from "../ReUsables/Button";
import { useScroll, motion, useTransform } from "framer-motion";
import LinksBox from "./LinksBox";
import { FooterLink1, FooterLink2 } from "@/utils";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const footerWrapper = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerWrapper,

    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 0]);

  return (
    <section className={styles.footer__wrapper} ref={footerWrapper}>
      <motion.footer className={`section ${styles.footer__section}`} style={{y}}>
        <div className={`container ${styles.footer__container}`}>
          <div className={styles.footer__top}>
            <div className={styles.ft__left}>
              <span className={styles.ready}>Ready to Shine?</span>
              <Button
                color="white"
                size="large"
                text="Get in touch"
                link="/contact"
              />
            </div>
            <div className={styles.ft__right}>
              <div className={styles.wordmark}>
                <Image fill quality={100} src={IMAGE} alt="BetterMarque" />
              </div>
            </div>
          </div>
          <div className={styles.footer__bottom}>
            <div className={styles.fb__top}>
              <div className={styles.fbt__left}>
                <div className={styles.brandmark}>
                  <Image fill quality={100} src={IMAGE2} alt="BetterMarque" />
                </div>
              </div>
              <div className={styles.fbt__right}>
                <LinksBox content={FooterLink1} />
                <LinksBox content={FooterLink2} />
              </div>
            </div>
            <div className={styles.fb__bottom}>
              <div className={styles.fbb__left}>
                <span>©Embrace Uniqueness</span>
              </div>
              <div className={styles.fbb__right}>
                <span>All rights reserved ©Better Marque</span>
                <span>2025 Edition</span>
              </div>
            </div>
            <div className={styles.fb__bottom2}>

            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Footer;
