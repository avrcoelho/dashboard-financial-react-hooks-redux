import { all, takeLatest } from 'redux-saga/effects';

import { FinancialTypes } from '../ducks/financial';

import { financialRequest } from './financial';

export default function* rootSaga() {
  return yield all([takeLatest(FinancialTypes.FINANCIAL_DATA_REQUEST, financialRequest)]);
}
