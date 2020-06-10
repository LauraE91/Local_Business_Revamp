import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../css/home-info-section.css";

function HomeInfoSection() {
  return (
    <section className="global-card-container home-info-section">

        <div className="global-card info-card accent-card">
          <h3 className="dark-clr title-3">Hours</h3>
          <ul className="dark-clr">
            <li>Monday-Saturday:<br /> 9:00 A.M. to 8:00 P.M.</li>

            <li>Sunday: <br />11:00 A.M. to 5:00 P.M.</li>

          </ul>
        </div>

        <div className="global-card info-card accent-card2">
          <h3><Link className="dark-clr title-3 primary-font" to="/events">Events</Link></h3>
          <ul className="dark-clr">
            <li>
            FEBRUARY 13th -  <br />come in wearing purple, green and gold and you will recieve a chocolate covered strawberry!</li>
            <li>RESIDENTS DAY SALE - MONDAY, FEBRUARY 19TH, 2018 - <br />celebrated on the third Monday of February. If you spend 50.00 you will get a 10.00 gift card for your next purchase!</li>
          </ul>
        </div>

        <div className="global-card info-card">
          <h3 className="light-clr title-3">Testimonials</h3>
          <p className="light-clr"><blockquote>I had a wonderful time at your store today! So many beautiful things and amazing service! Thank you!!!</blockquote>
          <cite>Jamie Rose Medler</cite></p>
        </div>
    </section>
  )
}

export default HomeInfoSection;
