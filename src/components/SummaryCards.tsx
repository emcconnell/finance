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
  };
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ data }) => {
  return (
    <div id="summary-cards">
      <SummaryCard title="Total Balance" value={data.totalBalance} link="#total-balance" />
      <SummaryCard title="Monthly Income" value={data.monthlyIncome} link="#monthly-income" />
      <SummaryCard title="Monthly Expenses" value={data.monthlyExpenses} link="#monthly-expenses" />
      <SummaryCard title="Savings Rate" value={data.savingsRate} link="#savings-rate" />
    </div>
  );
};

export default SummaryCards;
