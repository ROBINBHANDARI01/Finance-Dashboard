"use client";
import { spendingBreakdown } from "../../data/mockData";
import { Pie, PieChart, Tooltip, Cell, ResponsiveContainer } from "recharts";

export default function Spending() {
  const total = spendingBreakdown.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="mt-15 md:mt-0 p-5  bg-(--surface) border border-(--border) rounded-2xl">
      
      <div className="mb-5">
        <h2 className="text-sm text-(--text-primary) font-bold">Spending Breakdown</h2>
        <p className="text-xs text-(--text-secondary)">Where your money goes</p>
      </div>

      <div className="flex flex-col md:flex-row items-center ">

        {/* Chart + Center Text */}
        <div className="relative w-48 h-55 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingBreakdown}
                cx="50%"
                cy="50%"
                innerRadius={57}
                outerRadius={75}
                dataKey="amount"
                paddingAngle={0}
              >
                {spendingBreakdown.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(value) => [`$${value.toFixed(2)}`, ""]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text - inside relative wrapper */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-xs text-(--text-secondary)">Total</p>
            <p className="font-bold text-sm">${total.toFixed(2)}</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2 w-full">
          {spendingBreakdown.map((item, index) => (
            <div key={index} className="flex items-center mx-20 justify-between gap-10">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-(--text-secondary)">{item.category}</span>
              </div>
              <span className="text-xs font-medium">{item.percent}%</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}