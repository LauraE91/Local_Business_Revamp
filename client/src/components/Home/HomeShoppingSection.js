import React from "react";
import ShoppingCard from "../ShoppingCard";
import "../../App.css";
import "../css/home-shopping-section.css";

function HomeShoppingSection() {
  return (
    <section className="home-shopping-section">
       <h1 className="title-2 light-clr">Shopping</h1>
      <div className="global-card-container">
        <ShoppingCard>
          <img className="card-img" src="/img/mi.jpg" alt="michigan ornament"/>
          <h4 className="dark-clr title-4">Michigan Products</h4>
          <button className="primary-btn">View</button>
        </ShoppingCard>

        <ShoppingCard>
          <img className="card-img" src="/img/vase.jpg" alt="Fenton Art Glass vase"/>
          <h4 className="dark-clr title-4">Fenton Art Glass</h4>
          <button className="primary-btn">View</button>
        </ShoppingCard>

        <ShoppingCard>
          <img className="card-img" src="/img/kilwins_coffee.jpg"alt="Kilwin's Coffee"/>
          <h4 className="dark-clr title-4">Kilwin's Coffee</h4>
          <button className="primary-btn">View</button>
        </ShoppingCard>

      </div>S

    </section>
  )
}

export default HomeShoppingSection;
