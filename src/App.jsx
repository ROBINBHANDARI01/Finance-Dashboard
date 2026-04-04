import Dashboard from "./pages/dashboard";
import Layout from "./components/layout/Layout"
import "./App.css";
import { DashboardProvider } from "./Context/DashboardContext";

function App() {
  return (
    <DashboardProvider>
      <Layout>
      
      <Dashboard />
      
      </Layout>
        
    </DashboardProvider>
  );
}

export default App;
