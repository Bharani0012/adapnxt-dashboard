import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import "./App.css";
import Account from "./components/Account";
import Calculators from './components/Calculators';
import Channel from './components/Channel';
import Customers from './components/Customers';
import DashBoard from "./components/DashBoard";
import Integration from "./components/Integration";
import Inventory from "./components/Inventory";
import Order from './components/Order';
import Reports from './components/Reports';
import Returns from './components/Returns';
import Shipping from './components/Shipping';
import SideBar from "./components/SideBar";

const sectionTitles = {
  "/dashboard": "Dashboard",
  "/account": "Account",
  "/calculator": "Calculators",
  "/channel": "Channel",
  "/customers": "Customers",
  "/integration": "Integration",
  "/inventory": "Inventory",
  "/order": "Order",
  "/reports": "Reports",
  "/returns": "Returns",
  "/shipping": "Shipping",
};

const MainContent = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const sectionTitle = sectionTitles[currentPath] || "";

  return (
    <div className="col-10 main-section bg-secondary-subtle p-2">
      <div className='m-2'><span className='section-head'>{sectionTitle}</span></div>
      <Routes>
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/calculator" element={<Calculators />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/integration" element={<Integration />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container-fluid">
          <div className='row'>
            <div className='col-2 sidebar p-2'>
              <SideBar />
            </div>
            <MainContent />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
