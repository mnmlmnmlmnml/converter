import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Card } from "../../features/Card";

const apiKey = "399f4d598a9688356d298104a82c2ee4";
const url = `http://data.fixer.io/api/latest?access_key=${apiKey}`;

export function Courses() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return <div className={styles.courses}>{data && <Card data={data} />}</div>;
}
