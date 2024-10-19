export const mockData = {
  summaryCards: {
    totalBalance: "$7,000.00",
    monthlyIncome: "$0.00",
    monthlyExpenses: "$0.00",
    savingsRate: "0%",
  },
  overviewGraph: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "blue",
        data: [800, 1200, 1600, 2000, 2200, 2400],
      },
      {
        label: "Expenses",
        backgroundColor: "red",
        data: [600, 1000, 1400, 1800, 2000, 2200],
      },
    ],
  },
  recentTransactions: [
    {
      description: "Netflix Subscription",
      amount: "-$24.50",
      date: "6/14/2023",
      color: "red",
    },
    {
      description: "Salary Deposit",
      amount: "$500.00",
      date: "5/31/2023",
      color: "green",
    },
    {
      description: "Grocery Shopping",
      amount: "-$55.40",
      date: "6/9/2023",
      color: "red",
    },
    {
      description: "Spotify Subscription",
      amount: "-$9.99",
      date: "6/4/2023",
      color: "red",
    },
    {
      description: "Amazon Purchase",
      amount: "-$39.99",
      date: "6/7/2023",
      color: "red",
    },
    {
      description: "Electricity Bill",
      amount: "-$60.00",
      date: "6/15/2023",
      color: "red",
    },
    {
      description: "Freelance Payment",
      amount: "$300.00",
      date: "6/10/2023",
      color: "green",
    },
  ],
  accounts: [
    {
      id: 1,
      name: "Checking Account",
      balance: "$3,000.00",
    },
    {
      id: 2,
      name: "Savings Account",
      balance: "$4,000.00",
    },
    {
      id: 3,
      name: "Credit Card",
      balance: "$1,500.00",
    },
    {
      id: 4,
      name: "Investment Account",
      balance: "$10,000.00",
    },
  ],
  recurringTransactions: [
    {
      id: 1,
      description: "Netflix Subscription",
      amount: "-$24.50",
      frequency: "Monthly",
    },
    {
      id: 2,
      description: "Spotify Subscription",
      amount: "-$9.99",
      frequency: "Monthly",
    },
    {
      id: 3,
      description: "Gym Membership",
      amount: "-$30.00",
      frequency: "Monthly",
    },
    {
      id: 4,
      description: "Internet Bill",
      amount: "-$50.00",
      frequency: "Monthly",
    },
  ],
};
