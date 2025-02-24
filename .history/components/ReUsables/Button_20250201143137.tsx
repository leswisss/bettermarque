import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({link, text, color}: {link: string, text: string, color: string}) => {
  return (
    <Link href={link} className={`{styles.nav__contact}}>
      {text}
    </Link>
  );
};

export default Button;
