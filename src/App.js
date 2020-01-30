import React from "react";
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      error: false
    };
  }

  handleDecrement = () => {
    if (this.state.counter === 0) {
      this.setState({ error: true });
      return;
    }
    this.setState(state => ({ counter: state.counter - 1 }));
  };

  render() {
    return (
      <div className="container">
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
        <div>
          <h1>Jotto</h1>
          <Congrats success={true} />
          <GuessedWords guessedWords={[ { guessedWord: 'train', matchedLetters: 1}]} />
        </div>
      </div>
    );
  }
}

export default App;
