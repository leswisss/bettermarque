import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({link, text}: {link: string, text: string}) => {
  return (
    <Link href={link} className={styles.nav__contact}>
      {text}
    </Link>
  );
};

export default Button;
