import React from 'react'
import { BsFacebook,BsInstagram, BsTwitterX  } from "react-icons/bs";

const footer = () => {
  return (
    <div>
      <footer className="footer">
  <div className="footContainer">
    <div className="row">
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Our Services</li>
          <li>Privacy Policy</li>
          <li>Affliatiate Companies</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Get Help</h4>
        <ul>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>Return</li>
          <li>Order Status</li>
          <li>Payment Options</li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="https://www.facebook.com/">
          <BsFacebook />
          </a>
          <a href="https://www.instagram.com/">
          <BsInstagram />
          </a>
          <a href="https://www.twitter.com/">
          <BsTwitterX />
          </a>
          
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default footer
