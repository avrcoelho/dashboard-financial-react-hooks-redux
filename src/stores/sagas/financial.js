import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import LoginActions from '../ducks/financial';

export function* financialRequest() {
  try {
    const { data } = yield call(api.get);

    yield put(LoginActions.financialDataSuccess(data));
  } catch (err) {
    yield put(LoginActions.financialDataFailure('Erro ao obter os dados'));
  }
}
