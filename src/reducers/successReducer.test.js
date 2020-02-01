import { actionTypes } from '../actions';
import successReducer from '../reducers/successReducer';

test('expect success reducer to return false for unknow action type', () => {
  const nextState = successReducer(undefined);
  expect(nextState).toEqual({success: false});
});

test('expect success reducer to return true for correct guess action type', () => {
  const nextState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS});
  expect(nextState).toEqual({success: true});
});