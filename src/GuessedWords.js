import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {

  let contents = null;

  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="component-guessed-instruction">Guess the word!</span>
    );
  }
  else {
    const guessedWordsRows = props.guessedWords.map((word) => {
      return (
        <tr key={word.guessedWord} data-test="component-guessed-word">
          <td>{word.guessedWord}</td>
          <td>{word.matchedLetters}</td>
        </tr>

      );
    });
    contents = (
      <div>
        <h3>Guessed Words</h3>
        <table data-test="component-guessed-words" className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWordsRows}
          </tbody>
        </table>
      </div>
    )
  }

  return <div>{contents}</div>;
};

GuessedWords.defaultProps = {
  GuessedWords: []
};

export default GuessedWords;
