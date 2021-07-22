import React from "react";
import styles from "./index.module.scss";

export function Select(props) {
  const { currency, selectCurrency, onChangeCurrency, disabled } = props;
  return (
    <select
      value={selectCurrency}
      onChange={onChangeCurrency}
      className={styles.select}
      disabled={disabled}
    >
      {currency.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
