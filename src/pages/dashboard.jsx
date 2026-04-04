import Nav from "../components/dashboard/Navbar"
import Card from "../components/dashboard/card"
export default function Dashboard(){
    return(
        <div className="flex flex-col gap-6 p-4 px-5">
            <nav>
                <Nav></Nav>
            </nav>
  
  {/* Header */}
  <div>
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <p className="text-sm text-(--text-secondary)">
      Welcome back Robin, here's your financial overview.
    </p>
  </div>

  {/* Summary Cards */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>
  </div>

  {/* Middle Section */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
    {/* Left (Charts) */}
    <div className="lg:col-span-2 flex flex-col gap-6">
      <div className="card h-64">Line Chart</div>
      <div className="card h-64">Transactions Table</div>
    </div>

    {/* Right Sidebar */}
    <div className="flex flex-col gap-6">
      <div className="card h-40">Quick Actions</div>
      <div className="card h-40">Insights</div>
      <div className="card h-64">Bar Chart</div>
    </div>

  </div>

</div>
    )
}