import { combineReducers } from 'redux';

import board from './board';
import organization from './organization';

const rootReducer = combineReducers({
  board,
  organization,
});

export default rootReducer;
