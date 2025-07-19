import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = await response.json();
        setCurrencies(Object.keys(data.rates));
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.log("Error fetching the currency data : ", error);
      }
    };
    fetchCurrencies();
  }, [toCurrency]);

  const convert = () => (amount * exchangeRate).toFixed(2);
  return (
    <div>
      <h2> Currency Converter</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>To</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <h3>
        {amount} {fromCurrency} = {convert()} {toCurrency}
      </h3>
    </div>
  );
}

export default CurrencyConverter;
