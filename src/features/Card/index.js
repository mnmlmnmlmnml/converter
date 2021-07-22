import React from "react";

import styles from "./index.module.scss";

export function Card(props) {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.columns__first}>
        <div className={styles.text}> Курс обмена к {data.base} :</div>
      </div>

      <div className={styles.columns__second}>
        {Object.keys(data.rates).map((item) => (
          <div key={item} className={styles.list}>
            {item}: {data.rates[item].toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
}
