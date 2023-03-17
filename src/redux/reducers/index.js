import { combineReducers } from 'redux';

import player from './playerReducer';
import question from './questionReducer';

const rootReducer = combineReducers({
  player,
  question,
});

export default rootReducer;
