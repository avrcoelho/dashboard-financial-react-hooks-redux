import React from 'react';
import { useSelector } from 'react-redux';
import CurrencyFormat from 'react-currency-format';

import { Container } from './styles';

export default function Details() {
  const data = useSelector(state => state.financial.data);

  return (
    <Container>
      <ul>
        <li>
          <span>Recebido</span>
          <CurrencyFormat
            value={data.amountTaken}
            thousandSeparator="."
            decimalScale={2}
            displayType="text"
            decimalSeparator=","
            fixedDecimalScale
            prefix="R$ "
            renderText={value => <span>{value}</span>}
          />
        </li>
        <li>
          <span>Pago</span>
          <CurrencyFormat
            value={data.amountPayd}
            thousandSeparator="."
            decimalScale={2}
            displayType="text"
            decimalSeparator=","
            fixedDecimalScale
            prefix="R$ "
            renderText={value => <span>{value}</span>}
          />
        </li>
        <li>
          <span>Valor de taxas</span>
          <CurrencyFormat
            value={data.totalAmountInTaxes}
            thousandSeparator="."
            decimalScale={2}
            displayType="text"
            decimalSeparator=","
            fixedDecimalScale
            prefix="R$ "
            renderText={value => <span>{value}</span>}
          />
        </li>
        <li>
          <span>Juros mensal</span>
          <CurrencyFormat
            value={data.monthlyInterest}
            thousandSeparator="."
            decimalScale={2}
            displayType="text"
            decimalSeparator=","
            fixedDecimalScale
            prefix="R$ "
            renderText={value => <span>{value}</span>}
          />
        </li>
      </ul>
    </Container>
  );
}
