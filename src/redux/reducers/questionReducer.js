import { QUESTION } from '../actions';

const INITIAL_STATE = {};

const question = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case QUESTION: return {
    ...state,
    ...action.payload,
  };
  default: return state;
  }
};

export default question;
