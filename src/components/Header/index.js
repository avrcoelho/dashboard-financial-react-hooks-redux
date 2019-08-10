import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Header() {
  const data = useSelector(state => state.financial.data);

  return (
    <Container>
      <h1>Financeiro</h1>
      <h2>{`User ID: ${data.UserId}`}</h2>
    </Container>
  );
}
