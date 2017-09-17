import React, { Component } from 'react';

import {
  TransactionList
} from './components';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    transactions: [
      {
        id: 1,
        description: 'Potatoes',
        value: 10,
        date: '2017-09-17',
        category: 'food'
      },
      {
        id: 2,
        description: 'Pizza',
        value: 20,
        date: '2017-09-17',
        category: 'food'
      },
      {
        id: 3,
        description: 'T-shirt',
        value: 50,
        date: '2017-09-17',
        category: 'clothes'
      }
    ]
  };

  removeTransactionHandler = ({ id }) => {
    const { transactions } = this.state;

    this.setState({
      transactions: transactions.filter(transaction => transaction.id !== id)
    });
  };

  addTransactionHandler = (item) => {
    const { transactions } = this.state;
    const nextIndex = Math.random().toString(36).substring(7)
    this.setState({
      transactions: [
        { id: nextIndex, ...item },
        ...transactions
      ]
    });
  };

  render() {
    const { transactions } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <TransactionList items={transactions}
                         onRemoveTransaction={this.removeTransactionHandler}
                         onAddTransaction={this.addTransactionHandler}/>
      </div>
    );
  }
}

export default App;
