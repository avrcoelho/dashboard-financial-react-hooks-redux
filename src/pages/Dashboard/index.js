import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FinancialActions from '../../stores/ducks/financial';

import { Container, Body } from './styles';

import Header from '../../components/Header';
import Installments from '../../components/Installments';
import Details from '../../components/Details';

export default function Dashboard() {
  const error = useSelector(state => state.financial.error);
  const loading = useSelector(state => state.financial.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadFinancialData() {
      await dispatch(FinancialActions.financialDataRequest());
    }

    loadFinancialData();
  }, [dispatch]);

  return (
    <Container>
      {error ? (
        <div className="error">Erro ao obter os dados</div>
      ) : (
        <>
          {loading ? (
            <i className="fa fa-spinner fa-pulse fa-3x" />
          ) : (
            <>
              <Header />
              <Body>
                <Installments />
                <Details />
              </Body>
            </>
          )}
        </>
      )}
    </Container>
  );
}
