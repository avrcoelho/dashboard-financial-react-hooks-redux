import { combineReducers } from 'redux';

import { reducer as financial } from './financial';

export default combineReducers({
  financial,
});
