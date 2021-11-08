import { Route, Switch } from "react-router-dom";

import MainNavigation from "./components/layout/MainNavigation";
import LoginPage from "./components/pages/LoginPage";
import Layout from './components/layout/Layout'
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <Layout>
      <Route path="/" exact>
        <LoginPage />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
    </Layout>
  );
}

export default App;
