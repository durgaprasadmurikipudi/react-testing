import { getMockStore } from '../test/test-utils';
import { guessWord } from '../src/actions';

describe('guess word action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  
  let store;

  describe('no guessed words', () => {   
    const initialState = { secretWord }; 
    beforeEach(() => {
      store = getMockStore(initialState);
    });
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: { success: false},
        guessedWords: [{ guessedWord: unsuccessfulGuess, letterMatchingCount: 3}]
      };
      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: { success: true},
        guessedWords: [{ guessedWord: secretWord, letterMatchingCount: 5}]
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ guessedWord: 'agile', letterMatchingCount: 1}];
    const initialState = { guessedWords, secretWord};

    beforeEach(() => {
      store = getMockStore(initialState);
    });

    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: { success: false},
        guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchingCount: 3}]
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState(initialState);
      const expectedState = {
        ...initialState,
        success: { success: true},
        guessedWords: [ ...guessedWords, { guessedWord: secretWord, letterMatchingCount: 5}]
      };
      expect(newState).toEqual(expectedState);
    });
  });
});