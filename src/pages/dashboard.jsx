import Nav from "../components/layout/Navbar"
import Card from "../components/dashboard/card"
import Spending from "../components/dashboard/Spending"
import Balancetend from "../components/dashboard/Balance-trend"
export default function Dashboard(){
    return(
        <div className="flex flex-col gap-6 md:p-4 md:px-5">
          
  <div>
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <p className="text-sm text-(--text-secondary)">
      Welcome back Robin, here's your financial overview.
    </p>
  </div>

  {/* Summary Cards */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
  <Card />
  <Card />
  <Card />
  <Card />
</div>

  {/* Middle Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  
      <div className="card h-64">
        <Balancetend/>
      </div>

       <div className="flex flex-col gap-6">
       <div className="card h-40"><Spending></Spending></div>
      
       </div>

  </div>

</div>
    )
}