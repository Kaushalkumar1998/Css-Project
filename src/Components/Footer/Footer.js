import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="main-footer">
        <nav>
          <ul className="main-footer__links">
            <li className="main-footer__link">
              <a href="#">Support</a>
            </li>

            <li className="main-footer__link">
              <a href="#">Term of Use</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
