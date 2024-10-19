import React from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  type: 'income' | 'expense';
}

interface RecentTransactionsProps {
  data: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ data }) => {
  return (
    <div id="recent-transactions">
      <h2>Recent Transactions</h2>
      <ul>
        {data.map((transaction) => (
          <li key={transaction.id} className={transaction.type}>
            <span className="icon">{transaction.type === 'income' ? '💰' : '💸'}</span>
            <span>{transaction.description}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
