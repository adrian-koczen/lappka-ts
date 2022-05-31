import React from "react";
import styles from "./styles.module.scss";
// Icons
import { ReactComponent as Warning } from "icons/warning.svg";

interface Props {
  children: string;
}

const Notification = ({ ...props }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Warning className={styles.icon} />
        <span className={styles.text}>{props.children}</span>
      </div>
    </div>
  );
};

export default Notification;
