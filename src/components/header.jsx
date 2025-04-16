import React from 'react';
import logo from '../assets/logo.png';
import { Link} from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/">My Account</Link></li>
          <li><Link to="/">Compare</Link></li>
          <li><Link to="/">Login</Link></li>
        </ul>
      </nav>
      <div className="header_search">
        <input type="text" name="search" placeholder="search for items"/>
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
