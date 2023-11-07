import React, { StrictMode } from "react";
import { Link } from "react-router-dom";
import menuImg1 from "../Assets/adv-aseets/icons/1.svg";
import menuImg2 from "../Assets/adv-aseets/icons/2.svg";
import menuImg3 from "../Assets/adv-aseets/icons/3.svg";
import menuImg4 from "../Assets/adv-aseets/icons/4.svg";
import menuImg5 from "../Assets/adv-aseets/icons/5.svg";
import menuImg6 from "../Assets/adv-aseets/icons/6.svg";

import "./Home.css";

const Home = () => {
  return (
    <>
      <main>
        <h1>Teknolojik Yemekler</h1>
        <span>
          KOD ACIKTIRIR
          <br />
          PİZZA, DOYURUR
        </span>
        <Link to="/pizza">
          <button id="order-pizza">ACIKTIM</button>
        </Link>
      </main>
      <nav className="w-full h-20 bg-white m-auto flex flex-row justify-center">
        <ul className="h-30 flex items-center justify-evenly min-h-12.5">
          <a href="#">
            <li className="w-44 h-20 flex flex-row items-center justify-evenly">
              <img src={menuImg1} className="w-6.25 h-6.25" />
              YENİ! Kore
            </li>
          </a>
          <a href="#">
            <li className="w-44 h-20 flex flex-row items-center justify-evenly">
              <img src={menuImg2} className="w-6.25 h-6.25" />
              Pizza
            </li>
          </a>
          <a href="#">
            <li className="w-44 h-20 flex flex-row items-center justify-evenly">
              <img src={menuImg3} className="w-6.25 h-6.25" />
              Burger
            </li>
          </a>
          <a href="#">
            <li className="w-44 h-20 flex flex-row items-center justify-evenly">
              <img src={menuImg4} />
              Kızartmalar
            </li>
          </a>
          <a href="#">
            <li className="w-44 h-20 flex flex-row items-center justify-evenly">
              <img src={menuImg5} className="w-6.25 h-6.25" />
              Fast Food
            </li>
          </a>
          <a href="#">
            <li className="w-44 h-20 flex flex-row items-center justify-evenly">
              <img src={menuImg6} className="w-6.25 h-6.25" />
              Gazlı İçecek
            </li>
          </a>
        </ul>
      </nav>
      <section className="w-150 bg-gray-100 text-center">
        <div className="kampanya">
          <div className="lezzetus">
            <span className="lezzetus-title">Özel Lezzetus</span>
            <span className="lezzetus-aciklama">
              Position: Absolute Acı Burger
            </span>
            <button>SİPARİŞ VER</button>
          </div>
          <div className="hackathlon">
            <span className="hackathlon-title">Hackathlon Burger Menü</span>
            <button>SİPARİŞ VER</button>
          </div>
          <div className="npm-kurye">
            <span className="npm-kurye-title">
              Çoooook hızlı npm gibi kurye
            </span>
            <button>SİPARİŞ VER</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
