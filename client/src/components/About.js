import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './css/about-page.css';

function About() {
  return (
    <div className="App about-page">
      <article className="about-content">
        <h1>About Us</h1>

        <p>The Old Pioneer Store and Emporium is a place you go to truly enjoy shopping in Big Rapids, Michigan. We are located in the historic downtown district right across from Schuberg's bar and the Blue Cow restaurant on Michigan Avenue.</p>



        <p>We are famous for our friendly smiles and large selection of Michigan and Big Rapids gifts. Our Four Season's Holiday room boasts of year around Christmas, Hanukkah, Valentines, St. Patrick's Day, Easter and Halloween gifts all year long. We also feature the latest in home decor to go along with all of the season's.</p>

        <p>Our bath and body shop features Honey House and Crabtree & Evelyn lotions, bath and shower gels, perfumes, soaps, massage oils along with scented drawer liners, room sprays and potpourri's.</p>

        <p>Our candle shop features a large selection of Yankee and WoodWick candles and candle accessories.</p>

        <p>Our Wedding boutique features up to date wedding accessories, jewelry, guest books, albums, garters, unity candles, cake servers, picture frames and unity sand and stones.</p>

        <p>You will also find hundreds of unique gifts such as crystal, Fenton art glass, jewelry and an ever changing selection of award winning gifts.</p>
      </article>

      <aside className="side-panel">
        <img className="about-img" src="/img/aboutusprofilepicture.jpg"/>
        <article className="news-box">
        <h2>In The News...</h2>
        <p>The Old Pioneer Store was named Mecosta County's people's choice for best gifts and TV 9 & 10's peoples choice for the best Gift shop in Northern Michigan. This is an honor that we are proud of and humbled by. Our store is a place where people enjoy gathering and being entertained. We are a Big Rapids shopping tradition.</p>
        </article>
      </aside>
    </div>
  );
}

export default About;
