import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({link,}) => {
  return (
    <Link href="/contact" className={styles.nav__contact}>
      Start a project
    </Link>
  );
};

export default Button;
