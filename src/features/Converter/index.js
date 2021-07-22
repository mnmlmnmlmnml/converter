import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Input, Select } from "../../ui";
import svg from "../../svg/arrows.svg";

const apiKey = "399f4d598a9688356d298104a82c2ee4";
const url = `http://data.fixer.io/api/latest?access_key=${apiKey}`;

export function Converter() {
  const [currency, setCurrency] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrency([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`${url}&base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div className={styles.converter}>
      <div className={styles.wrapper}>
        <Input
          type="number"
          amount={fromAmount}
          onChange={handleFromAmountChange}
        />
        <Select
          disabled={true}
          amount={fromAmount}
          currency={currency}
          selectCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        />
      </div>
      <img src={svg} className={styles.img} alt="arrows" />
      <div className={styles.wrapper}>
        <Input amount={toAmount} onChange={handleToAmountChange} />
        <Select
          currency={currency}
          selectCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
        />
      </div>
    </div>
  );
}
