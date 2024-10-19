import React from 'react';
import Sidebar from './components/Sidebar';
import SummaryCards from './components/SummaryCards';
import OverviewGraph from './components/OverviewGraph';
import RecentTransactions from './components/RecentTransactions';
import Icons from './components/Icons';
import { mockData } from './mockData';

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
