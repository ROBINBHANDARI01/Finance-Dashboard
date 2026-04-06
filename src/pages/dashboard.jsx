import Card from "../components/dashboard/card";
import Spending from "../components/dashboard/Spending";
import Balancetend from "../components/dashboard/Balance-trend";
import Transaction from "../components/dashboard/TransactionsTable";
import Insights from "../components/dashboard/Insights";
import { summaryCards, transactions } from "../data/mockData";
import { Car } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 md:p-4 md:px-1">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-(--text-secondary)">
          Welcome back Robin, here's your financial overview.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
       {summaryCards.map((card) => (
        <Card 
        key={card.id}
        title={card.title}
        amount={card.amount}
        change={card.change}
        trend={card.trend}
        />
       ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch" >
        <div class="lg:col-span-2 md:col-span-2">
          <Balancetend />
        </div>

        <div class="lg:col-span-1">
          <Spending></Spending>
        </div>

        <div class="lg:col-span-2 md:col-span-2"><Transaction data={transactions}/></div>

          <div class="lg:col-span-1"><Insights></Insights></div>

      </div>

      
        
    </div>
  );
}
