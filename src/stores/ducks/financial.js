import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  financialDataRequest: null,
  financialDataSuccess: ['data'],
  financialDataFailure: ['error'],
});

export const FinancialTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: {},
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FINANCIAL_DATA_REQUEST]: state => state.merge({ loading: true, error: null }),
  [Types.FINANCIAL_DATA_SUCCESS]: (state, { data }) => state.merge({
    data,
  }),
  [Types.FINANCIAL_DATA_FAILURE]: (state, { error }) => state.merge({ loading: false, error }),
});
