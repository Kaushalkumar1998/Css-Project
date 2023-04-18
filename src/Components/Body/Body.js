import React from "react";
import "./Body.css";

const Body = () => {
  return (
    <div className="plans">
      <h1 className="section-title"> Choose Your Plane</h1>
      <article className="plan">
        <h1 className="plan__title">FREE</h1>
        <h2 className="plan__price">$0/month</h2>
        <h3>For hobby projects or small teams.</h3>
        <ul className="plan__items">
          <li className="plan__item">1 Workspace</li>
          <li className="plan__item">Unlimited Traffic</li>
          <li className="plan__item">10GB Storage</li>
          <li className="plan__item">Basic Support</li>
        </ul>
        <div>
          <button className="button">CHOOSE PLAN</button>
        </div>
      </article>
      <article className="plan plan--highlighted">
        <h1 className="plan__recommended">RECOMMENDED</h1>
        <h1 className="plan__title">PLUS</h1>
        <h2 className="plan__price">$29/month</h2>
        <h3>For ambitious projects.</h3>
        <ul className="plan__items">
          <li className="plan__item">5 Workspaces</li>
          <li className="plan__item">Unlimited Traffic</li>
          <li className="plan__item">100GB Storage</li>
          <li className="plan__item">Plus Support</li>
        </ul>
        <div>
          <button className="button">CHOOSE PLAN</button>
        </div>
      </article>
      <article className="plan">
        <h1 className="plan__title">PREMIUM</h1>
        <h2 className="plan__price">$99/month</h2>
        <h3>Your enterprise solution.</h3>
        <ul className="plan__items">
          <li className="plan__item">10 Workspaces</li>
          <li className="plan__item">Unlimited Traffic</li>
          <li className="plan__item">Unlimited Storage</li>
          <li className="plan__item">Priority Support</li>
        </ul>
        <div>
          <button className="button">CHOOSE PLAN</button>
        </div>
      </article>
    </div>
  );
};

export default Body;
