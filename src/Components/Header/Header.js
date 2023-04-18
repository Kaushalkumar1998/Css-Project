import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="main-div">
      <Link>pakahh</Link>
      <header className="main-header">
        <div className="main-title ">
          <a href="index.html" className="main-title__brand">
            uHost
          </a>
        </div>

        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <a href="../Pakage/Pakage" className="main-nav__item_tag">
                Packages
              </a>
            </li>
            <li className="main-nav__item">
              <a href="customers/index.html" className="main-nav__item_tag">
                Customers
              </a>
            </li>
            <li className="main-nav__item">
              <a
                href="start-hosting/index.html"
                className="main-nav__item_tag main-nav__item--cta"
              >
                Start Hosting
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="nav">Get The Freedom You Deserver</div>
    </div>
  );
};

export default Header;
