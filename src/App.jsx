import Dashboard from "./pages/dashboard";
import Layout from "./components/layout/Layout"
import { ThemeProvider } from "./Context/ThemeContext";
import "./App.css";
import { DashboardProvider } from "./Context/DashboardContext";

function App() {
  return (
    <ThemeProvider>
    <DashboardProvider>
      <Layout>
      <Dashboard />
      </Layout>
    </DashboardProvider>
    </ThemeProvider>
  );
}

export default App;
