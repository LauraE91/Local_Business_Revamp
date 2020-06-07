import React from "react";
import "../../App.css";
import "../css/home-shopping-section.css";

function HomeShoppingSection() {
  return (
    <section className="home-shopping-section">
      <div className="home-shopping-header"> <h1>Shopping</h1> </div>
      <div className="global-card-container">
        <div className="global-card shopping-card">
          <img className="card-img" src="/img/mi.jpg"/>
          <h4>Michigan Products</h4>
          <button className="primary-btn">View</button>

        </div>

        <div className="global-card shopping-card">
          <img className="card-img" src="/img/vase.jpg"/>
          <h4>Fenton Art Glass</h4>
          <button className="primary-btn">View</button>
        </div>

        <div className="global-card shopping-card">
          <img className="card-img" src="/img/kilwins_coffee.jpg"/>
          <h4>Kilwin's Coffee</h4>
          <button className="primary-btn">View</button>

        </div>

      </div>

    </section>
  )
}

export default HomeShoppingSection;
