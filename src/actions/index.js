import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const actionTypes = { 
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'Guess_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
}

export const correctGuess = () => {
  return {
    type: actionTypes.CORRECT_GUESS
  };
};

export const guessWord = guessedWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord || '';
    const letterMatchingCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: {guessedWord, letterMatchingCount}
    });

    if(secretWord.length === letterMatchingCount) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
};

export const getSecretWord = () => {
  return dispatch => {
    return new Promise(function(resolve) {
      setTimeout(function() {
        const words = ['haha', 'cooler', 'racha', 'ngery'];
        const index = (Math.random() * 10) % 4;        
        dispatch({ type: actionTypes.SET_SECRET_WORD, payload: words[parseInt(index)] })
        resolve(words[index]);
      }, 0);
    });
  };
};