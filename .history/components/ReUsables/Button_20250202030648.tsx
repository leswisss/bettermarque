import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({link, text, color, onClick}: {link: string, text: string, color: string, onClick?: () => void}) => {
  return (
    <>
    {
      onClick ? (<span onClick={} className={`${styles.nav__contact} ${color==="black"? styles.black : styles.white}`}>
        {text}
      </span>): (<Link href={link} className={`${styles.nav__contact} ${color==="black"? styles.black : styles.white}`}>
      {text}
    </Link>)
    }
    </>
  );
};

export default Button;
