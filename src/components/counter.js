import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCount = () => {
    this.setState({
      counter: ++this.state.counter
    });
  };

  decrementCount = () => {
    this.setState({
      counter: --this.state.counter
    })
  };

  render() {
    const {counter} = this.state;
    const h1Class = counter >= 10 ? 'blue' : 'green';

    return (
      <div>
        <h1 className={h1Class}>{counter}</h1>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    )
  }
}

export default Counter;