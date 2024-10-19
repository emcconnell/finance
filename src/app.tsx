import React from 'react';
import Sidebar from './components/Sidebar';
import SummaryCards from './components/SummaryCards';
import OverviewGraph from './components/OverviewGraph';
import RecentTransactions from './components/RecentTransactions';
import Icons from './components/Icons';

export const mockData = {
  summaryCards: [
    {
      totalBalance: "1000",
      monthlyIncome: "5000",
      monthlyExpenses: "2000",
      savingsRate: "20%"
    }
  ],
  overviewGraph: {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Income',
        backgroundColor: 'rgba(75,192,192,0.4)',
        data: [1500, 2000, 2500],
      },
      {
        label: 'Expenses',
        backgroundColor: 'rgba(255,99,132,0.4)',
        data: [1000, 1500, 2000],
      },
    ],
  },
  recentTransactions: [
    {
      id: 1,
      type: "income" as "income", // Ensure this is either "income" or "expense"
      description: "Salary",
      amount: 5000,
      date: "2023-10-01"
    },
    {
      id: 2,
      type: "expense" as "expense", // Ensure this is either "income" or "expense"
      description: "Groceries",
      amount: 200,
      date: "2023-10-02"
    }
  ]
};

const App: React.FC = () => {
  return (
    <div id="app">
      <Sidebar />
      <div id="main-dashboard">
        <SummaryCards data={mockData.summaryCards} />
        <OverviewGraph data={mockData.overviewGraph} />
      </div>
      <RecentTransactions data={mockData.recentTransactions} />
      <Icons />
    </div>
  );
};

export default App;
