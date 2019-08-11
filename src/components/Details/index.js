import React from "react";
import { useSelector } from "react-redux";

import { CurrencyComponent } from "../CurrencyFormat";
import { Container } from "./styles";

export default function Details() {
  const data = useSelector(state => state.financial.data);
  const { amountTaken, amountPayd, totalAmountInTaxes, monthlyInterest } = data;

  return (
    <Container>
      <ul>
        <CurrencyComponent data={amountTaken} text="Recebido" />
        <CurrencyComponent data={amountPayd} text="Pago" />
        <CurrencyComponent data={totalAmountInTaxes} text="Valor de taxas" />
        <CurrencyComponent data={monthlyInterest} text="Juros mensal" />
      </ul>
    </Container>
  );
}
