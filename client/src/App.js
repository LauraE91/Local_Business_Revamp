
import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shopping from './components/Shopping';
import Events from './components/Events';
import Contact from './components/Contact';




function App() {

const [navMenuClasses, setNavMenuClasses] = useState("nav-menu");

  //if (show) {
  //  navMenuClass = "nav-menu open";
  //}

  const navMenuOpen = () => {
    setNavMenuClasses("nav-menu open")
  }

  const navMenuClose = () => {
    setNavMenuClasses("nav-menu")
  }

  return (

    <div className="App">
      <div className="nav-container">
        <nav className="nav-bar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shopping">Shopping</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <Link to="/shopping/cart" className="primary-btn">Cart</Link>
        </nav>

        <nav className={navMenuClasses}>
        <span
        onClick={navMenuClose} className="close-btn"><i className="fas fa-times"></i></span>
          <li><Link to="/" onClick={navMenuClose}>Home</Link></li>
          <li><Link to="/about" onClick={navMenuClose}>About</Link></li>
          <li><Link to="/shopping" onClick={navMenuClose}>Shopping</Link></li>
          <li><Link to="/events" onClick={navMenuClose}>Events</Link></li>
          <li><Link to="/contact" onClick={navMenuClose}>Contact</Link></li>

        </nav>
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
    </div>
  );
}

export default App;
