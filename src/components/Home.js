import React, {StrictMode} from "react";
import {Link} from 'react-router-dom'; 

import './Home.css';

const Home = () => {
  return (
    <main>
        <h1>Teknolojik Yemekler</h1>
        <span>KOD ACIKTIRIR<br />PİZZA, DOYURUR</span>
        <Link to="/pizza">    
            <button id="order-pizza">ACIKTIM</button>
        </Link> 
    </main>
  );
};
export default Home;