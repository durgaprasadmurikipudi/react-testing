import moxios from 'moxios';

import { actionTypes, correctGuess, getSecretWord } from './';
import { getMockStore } from '../../test/test-utils';

describe('Correct guess', () => {
  test('correct guess action creator returns the correct type', () => {
    expect(correctGuess()).toEqual({ type: actionTypes.CORRECT_GUESS});
  });
});

describe('axios testing', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  /* test('adds secret word to state', () => {
    const secretWord = 'party';
    const store = getMockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });

  }); */

});