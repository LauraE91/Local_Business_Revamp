import React from "react";
import "../../App.css";
import "../css/home-cta-section.css";

function HomeCtaSection() {
  return (
    <section className="home-cta-section">
      <div className="cta-img"></div>
      <div className="cta-content">
        <h2 className="title-2 dark-clr">Sign Up for Our Newsletter!</h2>
          <form>
            <input className="global-input" type="email" placeholder="Enter Your Email..."/>
            <button className="accent-btn">SIGNUP</button>
          </form>

      </div>

    </section>
  )
}

export default HomeCtaSection;
