import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({
  link,
  text,
  color,
  size,
  onClick,
}: {
  link?: string;
  text: string;
  color: string;
  size: string;
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
          } ${size === "normal"}`}
        >
          {text}
        </Link>
      )}
    </>
  );
};

export default Button;
