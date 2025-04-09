import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

import Dashboard from './pages/Dashboard';
import Bills from './pages/Bills';
import Expenses from './pages/Expenses';
import Settings from './pages/Settings';
import Help from './pages/Help';
import './style.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className="app">
        <Sidebar show={sidebarOpen} />
        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
