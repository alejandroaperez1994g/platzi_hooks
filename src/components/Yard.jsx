import React from "react";
import "./Yard.css";
import logoYardSale from "../assets/logos/logo_yard_sale.svg";

const Yard = () => {
  return (
    <div className="Yard">
      <div className="login">
        <div className="form-container">
          <img src={logoYardSale} alt="logo" className="logo" />

          <h1 className="title">Create a new Password</h1>
          <p className="subtitle">A new password for you account</p>

          <form action="/" className="form">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-password"
              placeholder="*********"
            />

            <label htmlFor="password" className="label">
              Re-enter Password
            </label>
            <input
              type="password"
              id="new-password"
              className="input input-password"
              placeholder="*********"
            />

            <input
              type="submit"
              value="Confirm"
              className="primary-button login-button"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Yard;
