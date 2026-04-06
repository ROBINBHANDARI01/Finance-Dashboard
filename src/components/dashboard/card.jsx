import  Wallet  from "../../assets/card/wallet.png"
import Expense from "../../assets/card/expenses.png"
import Income from "../../assets/card/salary.png"
import Savings from "../../assets/card/savings.png"

const imgMap = {
  balance: Wallet,
  income: Income,
  expense: Expense,
  savings: Savings
}

export default function Card({title, imgKey,amount , change   }) {
  
  return (
    <div class="p-[0.435rem] md:p-3 border border-(--border) bg-(--surface) rounded-xl w-full">
      <div class="flex items-center gap-2">
        <img src={imgMap[imgKey]} class="size-6.5 "/>
  
        <h2 class="font-medium text-xs">{title}</h2>
      </div>
    

      <div class="flex flex-col mt-2">
        <h1 class="font-bold text-xl ml-0.5 mb-1">₹ {amount.toLocaleString()}</h1>
        <p className="text-[10px] sm:text-xs text-green-500 flex items-center">
  {change}% <span class=" text-(--text-secondary)  ml-0.5"> vs last month</span>
</p>
      </div>
    </div>
  );
}