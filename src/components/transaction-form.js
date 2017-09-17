import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './input';

class TransactionForm extends Component {
  state = {
    description: '',
    value: '',
    date: '',
    category: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {description, value, date, category} = this.state;
    this.props.onSubmit({
      description,
      value,
      date,
      category
    });
  }

  handleInputChange = (key, value) => {
    this.setState({[key]: value})
  };

  render() {
    const { description, value, date, category } = this.state;
    return (
      <div>
        <h2>Add transaction</h2>
        <form onSubmit={this.onSubmit}>
          <Input name='Description'
                 value={description}
                 onChange={this.handleInputChange}/>
          <Input name='Value'
                 type='number'
                 value={value}
                 onChange={this.handleInputChange}/>
          <Input name='Date'
                 type='date'
                 value={date}
                 onChange={this.handleInputChange}/>
          <Input name='Category'
                 value={category}
                 onChange={this.handleInputChange}/>
          <button type='submit'>Add transaction</button>
        </form>
      </div>
    );
  }
}

TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default TransactionForm;