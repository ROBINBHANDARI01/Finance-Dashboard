import { TrendingUp, BarChart2, PiggyBank } from "lucide-react";
import { insights } from "../../data/mockData";

export default function Insights() {
  return (
    <div className="p-5 bg-(--surface) border border-(--border) rounded-2xl">
    
      <div className="mb-5">
        <h2 className="font-bold text-sm">Monthly Insights</h2>
        <p className="text-xs text-(--text-secondary)">Your financial highlights</p>
      </div>

      <div className="flex flex-col gap-4">

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-blue-500/20 shrink-0">
            <TrendingUp className="size-5 text-blue-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold">Top Spending Category</h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-(--text-secondary)">{insights.highestSpending.category}</p>
              <p className="text-xs font-medium text-(--text-secondary)">
                ₹{insights.highestSpending.amount.toFixed(2)} ({insights.highestSpending.percent}%)
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-(--border)" />

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/20 shrink-0">
            <BarChart2 className="size-5 text-teal-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold">Month Comparison</h3>
            <div className="flex justify-between items-center">
              <p className="text-xs text-(--text-secondary)">{insights.vsLastMonth.label}</p>
              <p className="text-xs font-semibold text-green-400">
                {insights.vsLastMonth.change}%
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-(--border)" />

        {/* Savings Rate */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-500/20 shrink-0">
            <PiggyBank className="size-5 text-orange-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold">Savings Rate</h3>
            <div className="flex justify-between items-center gap-2">
              <p className="text-xs text-(--text-secondary)">{insights.savingsRate.label}</p>
              <p className="text-xs font-semibold text-green-400">
                ↑ {insights.savingsRate.change}%
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}