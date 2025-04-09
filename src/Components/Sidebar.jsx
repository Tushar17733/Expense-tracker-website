import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css';
import GridViewIcon from '@mui/icons-material/GridView';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const Sidebar = ({ show }) => {
  return (
    <div className={`sidebar ${show ? 'show' : ''}`}>
      <nav>
        <NavLink to="/" end>
          <GridViewIcon />
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="/bills">
          <ReceiptIcon />
          <p>Bills & Payments</p>
        </NavLink>
        <NavLink to="/expenses">
          <SignalCellularAltIcon />
          <p>Expenses</p></NavLink>
        <NavLink to="/settings">
          <SettingsIcon />
          <p>Settings</p></NavLink>
        <NavLink to="/help">
          <HelpCenterIcon />
          <p>Get Help</p></NavLink>
      </nav>
      <p className='copyright'>&copy; All Rights Reserved 2025-2026</p>
    </div>
  );
};

export default Sidebar;
