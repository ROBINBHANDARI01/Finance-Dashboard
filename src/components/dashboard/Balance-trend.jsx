'use client'
import {CartesianGrid,XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area} from "recharts"
import { balanceTrend } from "../../data/mockData"

export default function Balancetend(){
    return(
        <div class="p-5 rounded-2xl bg-(--surface) border border-(--border)">
    
      <div class="mb-4">
        <h2 class="text-sm text-(--text-primary) font-bold">
          Balance Trend
        </h2>
        <p class="text-xs text-(--text-secondary)">
          Track your balance over time
        </p>
      </div>

      <div class="w-full h-55">
        <ResponsiveContainer>
          <AreaChart data={balanceTrend}>
          <CartesianGrid strokeDasharray="1 6" vertical={false} />

            
            {/* Gradient */}
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0}/>
              </linearGradient>
            </defs>

            {/* X Axis */}
            <XAxis
              dataKey="date"
              tick={{fontSize:13, opacity:0.9}}
              stroke="var(--text-secondary)"
              tickLine={false}
              axisLine={false}
            />

            {/* Y Axis */}
            <YAxis
              stroke="var(--text-secondary)"
              tickLine={false}
              tick={{fontSize:13, opacity:0.9}}
              axisLine={false}
              domain={[0, 20000]}
              tickFormatter={(val) => `₹${val / 1000}K`}
            />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
              formatter={(value) => [`₹${value.toLocaleString()}`, ""]}
              labelStyle={{ color: "var(--text-secondary)" }}
            />

            {/* Area (fill) */}
            <Area
              type="monotone"
              dataKey="balance"
              stroke="var(--chart-2)"
              strokeWidth={1.5}
              fill="url(#colorBalance)"
              dot={false}
              activeDot={{ r: 2 }}
            />

          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    )
}