# Financial Dashboard

A modern, responsive financial dashboard built with React + Tailwind CSS, designed to visualize personal finance data with clean UI and intuitive components.

🔗 Live Demo: https://finance-dashboard-mocha-xi.vercel.app/

## Features
### Interactive Dashboard UI
Summary cards (Balance, Income, Expenses, Savings)
Clean and structured layout

### Data Visualization
Balance trend chart
Spending breakdown
Insights panel

### Transactions Table
Recent transactions with categories
Income vs Expense tracking

### Fully Responsive
Works across desktop, tablet, and mobile

### Fast Deployment
Hosted on Vercel

## Tech Stack
Frontend: React (Vite)
Styling: Tailwind CSS
State/Data: Static mock data (for UI development)
visualization Libraries: Tanstack-react , react-Recharts , lucide-react
Deployment: Vercel

## Project Structure

src/
│
├── components/
│   ├── dashboard/
│   │   ├── Balance-trend.jsx
│   │   ├── card.jsx
│   │   ├── Insights.jsx
│   │   ├── Spending.jsx
│   │   ├── SummaryCard.jsx
│   │   └── TransactionsTable.jsx
│   │
│   └── layout/
│       ├── Layout.jsx
│       ├── Navbar.jsx
│       └── sidebar.jsx
│
├── Context/
│   ├── DashboardContext.jsx
│   └── ThemeContext.jsx
│
├── data/
│   └── mockData.js
│
├── pages/
│   └── dashboard.jsx
│
├── utils/
│
├── App.css
├── App.jsx
├── index.css
└── main.jsx

## Key Learnings
Building reusable UI components in React
Structuring a scalable dashboard layout
With this project i got to know various react libraries for data visualization
Managing UI with mock data
Responsive design using Tailwind CSS
Deploying production-ready apps on Vercel

## Ui of the app across various devices

![Across All Devices](./src//assets/UI%20images/mockup-all-framed.png)
![Dashboard](./src/assets//UI%20images/mockup-desktop-framed%20(1).png)
![Mobile View](./src/assets/UI%20images/mockup-mobile-framed%20(1).png)
![Tablet View](./src/assets/UI%20images/mockup-tablet-framed%20(1).pngp)
