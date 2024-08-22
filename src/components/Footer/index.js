
import React from "react";
import i2cLogo from '../../assets/i2clogo.png';
import './index.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="footer-border" />
      <div className="footer">
        <img className="logo" src={i2cLogo} alt="logo" />
        <div className="right-footer">
          <div className="footer-tags">
            <a href="/">FAQs</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Other</a>
          </div>
          <div className="footer-button">
            <button className="button">Contact us</button>
          </div>
        </div>
      </div>
      <p className="footer-mark">Copyright © 2023 i2c inc. All rights reserved.</p>
    </div>
  );
}

export default Footer;
