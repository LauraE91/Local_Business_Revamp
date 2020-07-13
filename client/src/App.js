
import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About';
import Shopping from './components/Shopping';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';




function App() {

const [navMenuClasses, setNavMenuClasses] = useState("nav-menu");
const [accentBarClasses, setAccentBarClasses] = useState("accent-bar");

  //if (show) {
  //  navMenuClass = "nav-menu open";
  //}

  const navMenuOpen = () => {
    setNavMenuClasses("nav-menu open")
    setAccentBarClasses("accent-bar hide")

  }

  const navMenuClose = () => {
    setNavMenuClasses("nav-menu")
    setAccentBarClasses("accent-bar")
  }

  /*
  <div className={accentBarClasses}>
    <p>118 North Michigan Avenue, Big Rapids, Michigan / 231.796.2502</p>
  </div>
  */

  return (

    <div className="App">

      <div className="nav-container">
        <nav className="nav-bar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shopping">Shopping</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </nav>

        <nav className={navMenuClasses}>
          <span
          onClick={navMenuClose} className="close-btn"><i className="fas fa-times"></i></span>
          <li><Link to="/" onClick={navMenuClose}>Home</Link></li>
          <li><Link to="/about" onClick={navMenuClose}>About</Link></li>
          <li><Link to="/shopping" onClick={navMenuClose}>Shopping</Link></li>
          <li><Link to="/contact" onClick={navMenuClose}>Contact</Link></li>
        </nav>

        <Link to="/shopping/cart" className="cart-btn primary-btn">Cart</Link>

        <div
        onClick={navMenuOpen} className="burger-menu-icon">
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/shopping"><Shopping /></Route>
        <Route path="/events"><Events /></Route>
        <Route path="/contact"><Contact /></Route>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
