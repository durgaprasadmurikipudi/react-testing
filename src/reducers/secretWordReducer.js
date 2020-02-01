import { actionTypes } from '../actions';

export default (state=null, action) => {
  if(action.type === 'SET_SECRET_WORD') console.log('SET_SECRET_WORD', action)
  switch(action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }  
};