import React from "react";
import { connect } from "react-redux";

import Input from "./Input";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import "./App.css";
import { getSecretWord, guessWord } from "./actions";

export class App extends React.Component {
  
  /* initialAppContents = (
    <div data-test="component-app">
          {this.state.error && (
            <p style={{ color: "red" }} data-test="counter-error">
              The counter cannot go below 0
            </p>
          )}
          <h1 data-test="display-value">
            the counter value currently is {this.state.counter}
          </h1>
          <button
            data-test="increment-button"
            onClick={() =>
              this.setState(state => ({
                counter: state.counter + 1,
                error: false
              }))
            }
          >
            +
          </button>
          <button
            data-test="decrement-button"
            onClick={() => this.handleDecrement()}
          >
            -
          </button>
        </div>
  ); */

  componentDidMount() {
    this.props.getTheSecretWord();
  }

  render() {
    const { success, guessedWords, guessTheWord } = this.props;
    return (
      <div className="container">
        <div>
          <h1>Jotto</h1>
          <Congrats success={success} />
          <Input guessWord={guessTheWord} />
          <GuessedWords guessedWords={guessedWords} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ success: { success }, guessedWords }) => ({
  success,
  guessedWords
});
const mapDispatchToProps = dispatch => ({
  getTheSecretWord: () => dispatch(getSecretWord()),
  guessTheWord: word => dispatch(guessWord(word))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
