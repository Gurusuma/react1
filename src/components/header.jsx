import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom'; // only if using React Router

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/account">My Account</Link></li>
          <li><Link to="/compare">Compare</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className="header_search">
        <input type="text" name="search" placeholder="search for items" />
        <span><i className="fa-solid fa-magnifying-glass"></i></span>
      </div>
      <div className="Cart_section">
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-bag-shopping"></i>
      </div>
    </header>
  );
}

export default Header;
