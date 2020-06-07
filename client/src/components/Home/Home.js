import React from 'react';
import HomeAboutSection from "./HomeAboutSection";
import HomeShoppingSection from "./HomeShoppingSection";
import HomeInfoSection from "./HomeInfoSection";
import HomeCtaSection from "./HomeCtaSection";
import { Link, useLocation, useParams, useHistory, useRouteMatch } from 'react-router-dom';
import '../css/home.css';
import '../../App.css';



function Home() {
  return (
    <div className="Home">

        <header className="header">

          <div className="header-content">
            <h1>Old Pioneer Store & Emporium </h1>

            <p>A perfect combination of friendly service, entertaining displays filled with the finest gifts available.</p>
          </div>
          <div className="hero-img"></div>
          <div className="header-white-space"></div>
        </header>
        <HomeAboutSection />
        <HomeShoppingSection />
        <HomeInfoSection />
        <HomeCtaSection />
    </div>
  );
}

export default Home;
