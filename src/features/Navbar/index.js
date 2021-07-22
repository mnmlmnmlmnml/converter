import React from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.title}>Converter App</div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink className={styles.link} to="/" exact>
            Главная
          </NavLink>
          <li className={styles.item}>
            <NavLink className={styles.link} to="/courses">
              Курсы обмена валюты
            </NavLink>
          </li>
        </li>
      </ul>
    </nav>
  );
}
