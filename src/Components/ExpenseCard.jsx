import React from 'react';

const ExpenseCard = ({ title, amount }) => (
  <div className="expense-card">
    <p>{title}</p>
    <h3>{amount}</h3>
  </div>
);

export default ExpenseCard;
