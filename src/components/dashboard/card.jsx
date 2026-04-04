import balance from "../../assets/card/wallet.png";
import { ArrowUp } from "lucide-react";

export default function Card() {
  return (
    <div class="p-4 border border-(--border) bg-(--surface) rounded-xl w-full">
      <div class="flex items-center gap-2">
        <img src={balance} class="size-6" />
        <h2 class="font-medium">Total Balance</h2>
      </div>

      <div class="flex flex-col mt-3">
        <h1 class="font-bold text-2xl">$24,750.50</h1>
        <p class="text-green-500 flex items-center gap-1 text-sm mt-1">
          <ArrowUp class="size-4" />
          12.5 % 
          <span class="text-(--text-secondary) ml-2">vs last month</span>
        </p>
      </div>
    </div>
  );
}