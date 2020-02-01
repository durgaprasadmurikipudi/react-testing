import { actionTypes } from '../actions';

export default (state = {success: false}, action = {}) => {
  const{ type, payload} = action;
  switch(type) {
    case actionTypes.CORRECT_GUESS:
      return {success: true};
    default:
      return state;
  }
};