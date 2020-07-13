import React from 'react';
import ShoppingCard from './ShoppingCard';
import '../App.css';
import './css/shopping-page.css';

function Shopping() {
  return (
    <div className="App shopping-page dark-clr">
      <h1 className="title-1">Our Inventory</h1>
      <section className="products-container">
        <ShoppingCard>
          <img className="card-img" src="/img/decor2.jpg" alt="'Every Moment Matters' sign"/>
          <h4 className="title-4">"Every Moment Matters" Sign</h4>
          <button className="primary-btn">View</button>
        </ShoppingCard>

        <ShoppingCard>
          <img className="card-img" src="/img/decor3.jpg" alt="'Welcome to the Chaos' sign"/>
          <h4 className="title-4">"Welcome to the Chaos" Sign</h4>
          <button className="primary-btn">View</button>
        </ShoppingCard>

        <ShoppingCard>
          <img className="card-img" src="/img/vanilla-lotion.jpg" alt="Vanilla Lotion"/>
          <h4 className="title-4">Vanilla Lotion</h4>
          <button className="primary-btn">View</button>
        </ShoppingCard>

        <ShoppingCard>
          <img className="card-img" src="/img/lavender-lotion.jpg" alt="Lavender Lotion"/>
          <h4 className="title-4">Lavender Lotion</h4>
          <button className="primary-btn">View</button>
        </ShoppingCard>

        <ShoppingCard>
          <img className="card-img" src="/img/puzzle1.jpg" alt="Lake Supperior Agates Puzzle"/>
          <h4 className="title-4">Lake Supperior Agates Puzzle</h4>
          <button className="primary-btn">View</button>
        </ShoppingCard>

        <ShoppingCard>
          <img className="card-img" src="/img/puzzle2.jpg" alt="Grand Hotel Puzzle"/>
          <h4 className="title-4">Grand Hotel Puzzle</h4>
          <button className="primary-btn">View</button>
        </ShoppingCard>
      </section>
    </div>
  );
}

export default Shopping;
