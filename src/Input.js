import React from "react";
import { connect } from "react-redux";

import { guessWord } from "./actions";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guessedWord: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    
    evt.preventDefault();
    const value = this.state.guessedWord.trim();
    console.log('being called', value);
    if (value) this.props.guessTheWord(value);
    this.setState({ guessedWord: "" });
  }

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mx-sm-3 mb-2"
          type="text"
          placeholder="enter guess"
          value={this.state.guessedWord}
          onChange={e => this.setState({ guessedWord: e.target.value.trim() })}
        />
        <button
          data-test="submit-button"
          className=" mb-2 btn btn-primary"
          onClick={evt => this.handleSubmit(evt)}
        >
          submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success: { success } }) => {
  return { success };
};

const mapDispatchToProps = dispatch => {
  return {
    guessTheWord: word => dispatch(guessWord(word))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Input);
