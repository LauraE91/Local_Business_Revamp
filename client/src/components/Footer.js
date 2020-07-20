import React from "react";
import { Link } from 'react-router-dom';
import "../App.css";
import "./css/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-main ">
        <div className="footer-contact light-clr">
          <h2 className="footer-title title-2">Find Us Here!</h2>
          <p>118 North Michigan Ave,</p>
          <p>Big Rapids, Michigan</p>
          <p>231.796.2502</p>
          <a><i className="fab fa-facebook-square" /></a>
          <a><i className="fab fa-pinterest-square" aria-hidden="true" /></a>
        </div>

        <div className="footer-nav">
          <li><Link to="/" className="light-clr">Home</Link></li>
          <li><Link to="/about" className="light-clr">About</Link></li>
          <li><Link to="/shopping" className="light-clr">Shopping</Link></li>
          <li><Link to="/events" className="light-clr">Events</Link></li>
          <li><Link to="/contact" className="light-clr">Contact</Link></li>
        </div>
      </div>

      <div className="copyright dark-clr">
        <p>Copyright © 2020 Old Pioneer Store & Emporium. All rights reserved.</p>
        <p>Website by: Laura Ross</p>
      </div>
    </footer>
  )
}

export default Footer;
