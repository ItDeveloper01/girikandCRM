import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'tailwindcss';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tours from './pages/Tours';
import Leads from './pages/Leads';
import Customers from './pages/Customers';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AddCustomer from './pages/AddCustomer';
import AddTour from './pages/AddTour';
import AddLead from './pages/AddLead';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='/tours'
            element={<Tours />}
          />
          <Route
            path='/leads'
            element={<Leads />}
          />
          <Route
            path='/customers'
            element={<Customers />}
          />
          <Route
            path='/reports'
            element={<Reports />}
          />
          <Route
            path='/settings'
            element={<Settings />}
          />
          <Route
            path='/notifications'
            element={<Notifications />}
          />

          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
          <Route
            path='/leads/new'
            element={<AddLead />}
          />
          <Route
            path='/customers/new'
            element={<AddCustomer />}
          />
          <Route
            path='/tours/new'
            element={<AddTour />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}
