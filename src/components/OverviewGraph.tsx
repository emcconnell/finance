import React from 'react';
import { Bar } from 'react-chartjs-2';

interface OverviewGraphProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      backgroundColor: string;
      data: number[];
    }[];
  };
}

const OverviewGraph: React.FC<OverviewGraphProps> = ({ data }) => {
  return (
    <div id="overview-graph">
      <Bar
        data={data}
        options={{
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default OverviewGraph;
