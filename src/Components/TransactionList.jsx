import React, { useState, useEffect } from 'react';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DeleteIcon from '@mui/icons-material/Delete';

const TransactionList = ({ transactions, setTransactions }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({ name: '', amount: '', type: 'negative' });

  // Load from localStorage on mount
  useEffect(() => {
    const storedData = localStorage.getItem('transactions');
    if (storedData) {
      setTransactions(JSON.parse(storedData));
    }
  }, [setTransactions]);

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const openDialog = () => {
    setShowDialog(true);
    setFormData({ name: '', amount: '', type: 'negative' });
  };

  const closeDialog = () => setShowDialog(false);

  const handleAddTransaction = () => {
    if (!formData.name || !formData.amount) {
      alert('Please fill all fields');
      return;
    }

    const formattedAmount = `₹${parseFloat(formData.amount).toLocaleString()}`;
    const newTransaction = {
      name: formData.name,
      amount: formattedAmount,
      positive: formData.type === 'positive',
    };

    setTransactions([newTransaction, ...transactions]);
    closeDialog();
  };

  const deleteTransaction = (index) => {
    const updated = [...transactions];
    updated.splice(index, 1);
    setTransactions(updated);
  };

  return (
    <div className="transaction-list">
      <h3>
        <ReceiptIcon />
        <p>Your Transaction History</p>
      </h3>
      <hr />

      {transactions.map((txn, i) => (
        <div key={i} className="txn">
          <span>{txn.name}</span>
          <span className={txn.positive ? 'positive' : 'negative'}>{txn.amount}</span>
          <span className="delete-icon" onClick={() => deleteTransaction(i)}>
            <DeleteIcon fontSize="small" />
          </span>
        </div>
      ))}

      <button className="add-btn" onClick={openDialog}>Add New</button>

      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h4>Add Transaction</h4>
            <input
              type="text"
              placeholder="Transaction Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            >
              <option value="positive">Income (Positive)</option>
              <option value="negative">Expense (Negative)</option>
            </select>
            <div className="dialog-actions">
              <button onClick={handleAddTransaction}>Add</button>
              <button onClick={closeDialog} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
