
export const user = {
  name: "Robin Bhandari",
  role: "Admin",
  greeting: "Good morning",
};

export const summaryCards = [
  {
    id: 1,
    imgKey:"balance",
    title: "Total Balance",
    amount: 12340.75,
    change: 4.3,
    trend: "up",
    color: "blue",
  },
  {
    id: 2,
    imgKey:"income",
    title: "Income",
    amount: 4200.00,
    change: 2.1,
    trend: "up",
    color: "green",
  },
  {
    id: 3,
    imgKey:"expense",
    title: "Expenses",
    amount: 3105.50,
    change: 5.8,
    trend: "down",
    color: "red",
  },
  {
    id: 4,
    imgKey:"savings",
    title: "Net Savings",
    amount: 1094.50,
    change: 3.2,
    trend: "up",
    color: "purple",
  },
];

export const balanceTrend = [
  { date: "Jul 1",  balance: 9800  },
  { date: "Jul 4",  balance: 4500  },
  { date: "Jul 8",  balance: 10200 },
  { date: "Jul 11", balance: 10800 },
  { date: "Jul 15", balance: 11200 },
  { date: "Jul 17", balance: 15650 },
  { date: "Jul 19", balance: 11300 },
  { date: "Jul 22", balance: 11900 },
  { date: "Jul 25", balance: 12100 },
  { date: "Jul 29", balance: 12340 },
];

export const spendingBreakdown = [
  { category: "Housing",        percent: 32, amount: 993.76,  color: "#6366f1" },
  { category: "Food & Dining",  percent: 22, amount: 683.21,  color: "#22c55e" },
  { category: "Transportation", percent: 14, amount: 434.77,  color: "#3b82f6" },
  { category: "Shopping",       percent: 12, amount: 372.66,  color: "#f97316" },
  { category: "Entertainment",  percent: 9,  amount: 279.50,  color: "#ec4899" },
  { category: "Others",         percent: 11, amount: 341.61,  color: "#a855f7" },
];

export const transactions = [
  {
    id: 1,
    date: "Jul 24, 2024",
    description: "D-Mart Groceries",
    category: "Food & Dining",
    type: "Expense",
    amount: -64.20,
    status: "Completed",
  },
  {
    id: 2,
    date: "Jul 23, 2024",
    description: "Ola Cab",
    category: "Transportation",
    type: "Expense",
    amount: -18.50,
    status: "Completed",
  },
  {
    id: 3,
    date: "Jul 22, 2024",
    description: "Salary Deposit",
    category: "Income",
    type: "Income",
    amount: +3800.00,
    status: "Completed",
  },
  
  {
    id: 4,
    date: "Jul 19, 2024",
    description: "Freelance Project",
    category: "Income",
    type: "Income",
    amount: +400.00,
    status: "Completed",
  },
  {
    id: 5,
    date: "Jul 18, 2024",
    description: "Electricity Bill",
    category: "Housing",
    type: "Expense",
    amount: -95.00,
    status: "Completed",
  },
  
  {
    id: 6,
    date: "Jul 16, 2024",
    description: "Internet Bill",
    category: "Housing",
    type: "Expense",
    amount: -40.00,
    status: "Completed",
  },
  {
    id: 7,
    date: "Jul 15, 2024",
    description: "YouTube Premium",
    category: "Entertainment",
    type: "Expense",
    amount: -12.99,
    status: "Completed",
  },
];

export const insights = {
  highestSpending: {
    category: "Housing",
    amount: 4000.76,
    percent: 32,
  },
  vsLastMonth: {
    label: "Expenses decreased by",
    change: 5.8,
  },
  savingsRate: {
    label: "You saved 26% of your income",
    change: 3.2,
  },
};