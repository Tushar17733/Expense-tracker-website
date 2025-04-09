import React, { useEffect, useState } from 'react';
import ExpenseCard from '../Components/ExpenseCard';
import Graph from '../Components/Graph';
import TransactionList from '../Components/TransactionList';

const Dashboard = () => {
  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem('transactions');
    return stored ? JSON.parse(stored) : [];
  });

  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    generateGraphData();
  }, [transactions]);

  const generateGraphData = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });

    let foodTotal = 0;
    let shoppingTotal = 0;

    transactions.forEach(({ amount, name }) => {
      const numericAmount = parseInt(amount.replace(/[₹,]/g, ''));

      if (/food|burger|mc/i.test(name.toLowerCase())) {
        foodTotal += numericAmount;
      } else {
        shoppingTotal += numericAmount;
      }
    });

    setGraphData([
      {
        date: formattedDate,
        food: foodTotal,
        shopping: shoppingTotal,
      },
    ]);
  };

  const sorted = [...transactions].sort(
    (a, b) =>
      parseInt(b.amount.replace(/[₹,]/g, '')) -
      parseInt(a.amount.replace(/[₹,]/g, ''))
  );

  const topThree = [0, 1, 2].map((i) => sorted[i] || { name: `Max ${i + 1}`, amount: '₹0' });

  return (
    <div className="dashboard">
      <div className="part1">
        <div className="cards">
          {topThree.map((txn, i) => (
            <ExpenseCard key={i} title={txn.name} amount={txn.amount} />
          ))}
        </div>
        <Graph graphData={graphData} />
      </div>
      <div className="part2">
        <TransactionList transactions={transactions} setTransactions={setTransactions} />
      </div>
    </div>
  );
};

export default Dashboard;
