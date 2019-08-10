import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FinancialActions from '../../stores/ducks/financial';

// import { Container, Body } from './styles';

// import Header from '~/components/Header';

export default function Dashboard() {
  const data = useSelector(state => state.financial.data);
  const error = useSelector(state => state.financial.error);
  const loading = useSelector(state => state.financial.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadFinancialData() {
      await dispatch(FinancialActions.financialDataRequest());
    }

    loadFinancialData();
  }, [dispatch]);

  console.log(data);

  return (
    // <Container>
    //   <Header />
    //   <Body />
    // </Container>
    <h1>Hello</h1>
  );
}
