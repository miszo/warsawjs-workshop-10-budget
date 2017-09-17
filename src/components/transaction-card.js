import React from 'react';
import PropTypes from 'prop-types';

const TransactionCard = ({
    item: { id, description, value, date, category},
    onRemoveTransaction
}) => (
  <div>
    <h2>{description}</h2>
    <h3>Value: <strong>{value} zł</strong></h3>
    <div>Date: <strong>{date}</strong></div>
    <div>Category: <strong>{category}</strong></div>
    <button onClick={() => onRemoveTransaction({id})}>Remove</button>
  </div>
);

TransactionCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default TransactionCard;