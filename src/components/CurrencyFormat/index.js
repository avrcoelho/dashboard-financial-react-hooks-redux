import React from "react";
import CurrencyFormat from "react-currency-format";
import { moneyFormat } from "../../constants";

export const CurrencyComponent = ({ data, text }) => (
  <li>
    <span>{text}</span>
    <CurrencyFormat
      value={data}
      thousandSeparator={moneyFormat.thousandSeparator}
      decimalScale={moneyFormat.decimalScale}
      displayType={moneyFormat.displayType}
      decimalSeparator={moneyFormat.decimalSeparator}
      prefix={moneyFormat.prefix}
      fixedDecimalScale
      renderText={value => <span>{value}</span>}
    />
  </li>
);
