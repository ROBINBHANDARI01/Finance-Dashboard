import balance from "../../assets/card/wallet.png";
import { ArrowUp } from "lucide-react";

export default function Card() {
  return (
    <div class="p-[0.435rem] md:p-3 border border-(--border) bg-(--surface) rounded-xl w-full">
      <div class="flex items-center gap-2">
        <img src={balance} class="size-6.5 "/>
        <h2 class="font-medium text-xs">Total Balance</h2>
      </div>

      <div class="flex flex-col mt-2">
        <h1 class="font-bold text-xl ml-0.5 mb-1">₹ 24,750.50</h1>
        <p className="text-[10px] sm:text-xs text-green-500 flex items-center">
  12.5%  <span class=" text-(--text-secondary)  ml-0.5"> vs last month</span>
</p>
      </div>
    </div>
  );
}