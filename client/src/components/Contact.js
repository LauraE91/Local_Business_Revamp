import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './css/contact-page.css';

function Contact() {
  return (
    <div className="App contact-us-page dark-clr">
      <div className="contact-us">
        <h1 className="title-1">Contact Us</h1>
        <p>(231) 796-2502</p>
        <p>sales@theoldpioneerstore.com</p>
      </div>

      <div className="hours">
        <h1 className="title-1">Hours</h1>
        <p>Monday-Saturday</p>
        <p>9:00 A.M. to 10:00 P.M.</p>
        <p>Sunday</p>
        <p>11:00 A.M. to 8:00 P.M.</p>
      </div>
    </div>
  );
}

export default Contact;
