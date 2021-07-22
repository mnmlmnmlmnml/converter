import React from "react";
import styles from "./index.module.scss";

export function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Конвертер валют</h1>
      <p className={styles.text}>Онлайн конвертация валют</p>
    </div>
  );
}
