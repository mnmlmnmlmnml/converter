import React from "react";
import styles from "./index.module.scss";

export function Input(props) {
  const { amount, onChange } = props;

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={Math.round(amount * 100) / 100}
        onChange={onChange}
      />
    </div>
  );
}
