import React from "react";
import "./Section.css";

const Section = () => {
  return (
    <div className="section">
      <h1 className="title"> Many Good Reason to Stick Around</h1>
      <ul className="items">
        <li className="item">
          <div className="image"></div>
          <p className="description"> 3,857,000 Trusting Customers</p>
        </li>
        <li className="item">
          <div className="image"></div>
          <p className="description"> 99.99% Uptime Guarantee</p>
        </li>
        <li className="item">
          <div className="image"></div>
          <p className="description"> Lightning Fast CDN</p>
        </li>
      </ul>
    </div>
  );
};

export default Section;
