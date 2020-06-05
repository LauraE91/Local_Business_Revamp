import React from 'react';
import { Link, useLocation, useParams, useHistory, useRouteMatch } from 'react-router-dom';
import './css/home.css';



import '../App.css';

function Home() {
  return (
    <div className="Home">
      <header>
        <div className="hero-img">Hi</div>
        <h1 className="home-header">Old Pioneer Store & Emporium</h1>
      </header>
    </div>
  );
}

export default Home;
