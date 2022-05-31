import React from "react";
import styles from "./styles.module.scss";

interface TextCheckbox extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const TextCheckbox = ({ text, ...props }: TextCheckbox) => {
  return (
    <div className={styles.rememberMeContainer}>
      <input className={styles.checkBox} {...props} />
      <span>{text}</span>
    </div>
  );
};

export default TextCheckbox;
