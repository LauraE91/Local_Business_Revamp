import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './css/shopping-card.css';

function ShoppingCard(props) {
  return (
    <div className="App global-card shopping-card">
      {props.children}
    </div>
  );
}

export default ShoppingCard;
