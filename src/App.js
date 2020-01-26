import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render, shallow } from 'enzyme';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      error: false
    }
  }

  handleDecrement = () => {
    if(this.state.counter === 0) {
      this.setState({error: true});
      return;
    }
    this.setState(state => ({counter: state.counter - 1}));
  }
    
  render() {
    return (
      <div data-test="component-app">
        {this.state.error && <p style={{color: 'red'}} data-test="counter-error">The counter cannot go below 0</p>}
        <h1 data-test="display-value">the counter value currently is {this.state.counter}</h1>
        <button data-test="increment-button" onClick={() => this.setState(state => ({counter: state.counter + 1, error: false}))}>+</button>
        <button data-test="decrement-button" onClick={() => this.handleDecrement()}>-</button>
      </div>
    );
  }
}

export default App;
