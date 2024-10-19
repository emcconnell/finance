import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string;
  link: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
      <a href={link}>View details</a>
    </div>
  );
};

interface SummaryCardsProps {
  data: {
    totalBalance: string;
    monthlyIncome: string;
    monthlyExpenses: string;
    savingsRate: string;
  }[];
}

type Transaction = {
  id: number;
  type: "expense" | "income";
  description: string;
  amount: number;
  date: string;
};

const SummaryCards: React.FC<SummaryCardsProps> = ({ data }) => {
  return (
    <div id="summary-cards">
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <SummaryCard title="Total Balance" value={item.totalBalance} link="#total-balance" />
          <SummaryCard title="Monthly Income" value={item.monthlyIncome} link="#monthly-income" />
          <SummaryCard title="Monthly Expenses" value={item.monthlyExpenses} link="#monthly-expenses" />
          <SummaryCard title="Savings Rate" value={item.savingsRate} link="#savings-rate" />
        </React.Fragment>
      ))}
    </div>
  );
};

interface RecentTransactionsProps {
  data: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({ data }) => {
  return (
    <div id="recent-transactions">
      {data.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.description}</p>
          <p>{transaction.amount}</p>
          <p>{transaction.date}</p>
        </div>
      ))}
    </div>
  );
};

const mockData = {
  summaryCards: [
    {
      totalBalance: "1000",
      monthlyIncome: "5000",
      monthlyExpenses: "3000",
      savingsRate: "20%",
    },
    // ... other summary card objects
  ],
  overviewGraph: [
    // ... data for overview graph
  ],
  recentTransactions: [
    { id: 1, type: "expense", description: "Groceries", amount: 50, date: "2023-01-01" },
    { id: 2, type: "income", description: "Salary", amount: 1500, date: "2023-01-02" },
    { id: 3, type: "expense", description: "Utilities", amount: 100, date: "2023-01-03" },
    // ... other transactions
  ],
};

export default SummaryCards;
export { RecentTransactions };
