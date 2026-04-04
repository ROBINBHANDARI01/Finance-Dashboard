import balance from "../../assets/card/wallet.png"
export default function Card(){
    return(
       
        <div >
            <div class="p-4 border rounded-xl">
                    <div class="flex items-center gap-2">
                  <img src={balance} class="size-6"></img>
                   <h2 class="text-sm">Total Balance</h2>
                    </div>
                    <h1 class="font-bold text-lg">₹ 24000.26</h1>
                    
            </div>
          
        </div>
        
    )
}