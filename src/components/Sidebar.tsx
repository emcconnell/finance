import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div id="sidebar">
      <nav>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#accounts">Accounts</a></li>
          <li><a href="#total-balance">Total Balance</a></li>
          <li><a href="#monthly-income">Monthly Income</a></li>
          <li><a href="#monthly-expenses">Monthly Expenses</a></li>
          <li><a href="#savings-rate">Savings Rate</a></li>
          <li><a href="#recurring">Recurring</a></li>
          <li><a href="#forecasts">Forecasts</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
