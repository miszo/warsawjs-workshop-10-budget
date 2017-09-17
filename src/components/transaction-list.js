import React from 'react';
import PropTypes from 'prop-types';
import TransactionForm from './transaction-form';
import TransactionCard from './transaction-card';

const TransactionList = ({items, onRemoveTransaction, onAddTransaction}) => (
  <div>
    <TransactionForm onSubmit={onAddTransaction}/>
    <h1>Transaction List!</h1>
    {items.map(item => (
     <TransactionCard key={item.id}
                      item={item}
                      onRemoveTransaction={onRemoveTransaction}/>
    ))}
  </div>
);

TransactionList.propTypes = {
  items: PropTypes.array.isRequired
};

export default TransactionList;