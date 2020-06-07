import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import "./css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-contact">
          <h2 className="footer-title">Find Us Here!</h2>
          <p>118 North Michigan Avenue,</p>
          <p>Big Rapids, Michigan</p>
          <p>231.796.2502</p>
          <a><i class="fab fa-facebook-square" /></a>
          <a><i class="fab fa-pinterest-square" aria-hidden="true" /></a>
        </div>

        <div className="footer-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shopping">Shopping</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2020 Old Pioneer Store & Emporium. All rights reserved.</p>
        <p>Website by: Laura Ross</p>
      </div>
    </footer>
  )
}

export default Footer;
