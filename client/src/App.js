import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Shopping from './components/Shopping';
import Events from './components/Events';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/shopping">Shopping</Link>
      <Link to="/events">Events</Link>
      <Link to="/contact">Contact</Link>

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
