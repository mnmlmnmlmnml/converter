import React from "react";
import styles from "./index.module.scss";
import { Converter } from "../../features/Converter";
import { Header } from "../../features/Header";

export function Main() {
  return (
    <div className={styles.main}>
      <Header />
      <Converter />
    </div>
  );
}
