import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({link, text, color, onClick}: {link: string, text: string, color: string, onClick?: () => void}) => {
  return (
    <>
    {
      onClick ? (<span className={`${styles.nav__contact} ${color==="black"? styles.black : styles.white}`}>
        {text}
      </span>): ()
    }
    </>
  );
};

export default Button;
