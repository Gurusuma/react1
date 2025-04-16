import React from 'react';
import './Footer.css'; 
import logo from '../assets/logo.png';
import payment from '../assets/payment-method.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <img src={logo} alt="logo" className="footer-logo" />
        <h3>Contact</h3>
        <p><b>Address:</b> 13 Tlemcen Road street 32</p>
        <p><b>Phone:</b> +01 2222 365 / (+91)01234567</p>
        <p><b>Hours:</b> 10:00 - 18:00, Mon-Sat</p>
      </div>

   
      <div className="footer-section">
        <h3>Information</h3>
        <ul className="footer-list">
          <li>About us</li>
          <li>Delivery information</li>
          <li>Privacy policy</li>
          <li>Terms & conditions</li>
          <li>Contact us</li>
          <li>Support center</li>
        </ul>
      </div>

   
      <div className="footer-section">
        <h3>My Account</h3>
        <ul className="footer-list">
          <li>Sign in</li>
          <li>View cart</li>
          <li>My Wishlist</li>
          <li>Track my order</li>
          <li>Help</li>
          <li>Order</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Secured Payment Gateways</h3>
        <img src={payment} alt="Payment methods" className="payment-image" />
      </div>
    </div>
  );
}

export default Footer;
