import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  const guessedInstruction = props.GuessedWords.length === 0 ? (
    <span data-test="component-guessed-instruction">Guess the word!</span>
  ): null;
  return (
    <div>
      {guessedInstruction}
    </div>
  );
};

GuessedWords.defaultProps = {
  GuessedWords: []
}

export default GuessedWords;