import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({
  link,
  text,
  color,
  size,
  type,
  onClick,
}: {
  link?: string;
  text: string;
  color: string;
  size: string;
  type?: string;
  onClick?: () => void;
}) => {
  return (
    <>
      {onClick && (
        <span
          onClick={onClick}
          className={`${styles.nav__contact} ${
            color === "black" ? styles.black : styles.white
          }`}
        >
          {text}
        </span>
      )}
      {link && (
        <Link
          href={link}
          className={`${styles.nav__contact} ${
            color === "black" ? styles.black : styles.white
          } ${size === "normal" ? styles.normal : styles.large}`}
          target={target}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
