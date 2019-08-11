import React from "react";
import { useSelector } from "react-redux";

import { Container, Table } from "./styles";

export default function Installments() {
  const installments = useSelector(state => state.financial.data.installments);

  return (
    <Container>
      <div>
        <h2>Parcelas</h2>
      </div>
      <Table>
        <thead>
          <tr>
            <th />
            <th>Valor</th>
            <th>Pago?</th>
            <th>Vencimento</th>
          </tr>
        </thead>
        <tbody>
          {installments &&
            installments.map((installment, index) => (
              <tr key={String(index)}>
                <td>{Number(index + 1)}</td>
                <td>{installment.formatedValue}</td>
                <td>{installment.payd ? "Sim" : "Não"}</td>
                <td>{installment.dueDate}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
}
