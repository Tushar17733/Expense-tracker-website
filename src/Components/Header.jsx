import React from 'react';
import '../style.css';
import logo from '../assets/expense.png';
import image from '../assets/depak.jpg';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="header">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Expense.io</span>
      </div>

      <div className="nav-links">
        <a href="#">Need Help?</a>
        <a href="#">Read Our Blog</a>
        <div className="profile">
          <img src={image} alt="" className='profile-photo' />
          <p>Hi, Deepak</p>
        </div>
      </div>

      <div className="hamburger" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Header;
