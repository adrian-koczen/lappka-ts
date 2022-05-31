import React from "react";
import styles from "./styles.module.scss";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ ...props }: Props) => {
  return (
    <button className={styles.container} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
