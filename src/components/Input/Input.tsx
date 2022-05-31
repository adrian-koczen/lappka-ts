import React from "react";
import styles from "./styles.module.scss";
// Components
import Notification from "components/Notification/Notification";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error: string | false | undefined;
}

const Input = ({ icon, error, ...props }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <input className={styles.input} {...props} />
      {error && <Notification>{error}</Notification>}
    </div>
  );
};

export default Input;
