import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '/logo.png';
import cart_icon from '/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const handleClick = () => {
    navigate('/');
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light shadow">
      <div className="container-fluid">
        <div className="nav-logo">
          <img
            src={logo}
            onClick={handleClick}
            alt="Logo"
            className="navbar-brand"
          />
        </div>
        {/* Bootstrap Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={() => setMenu("shop")}>
              <Link className={`nav-link ${menu === "shop" ? "active" : ""}`} to="/">
                Overview
              </Link>
            </li>
            <li className="nav-item" onClick={() => setMenu("abstract")}>
              <Link className={`nav-link ${menu === "abstract" ? "active" : ""}`} to="/abstract">
                Abstract Painting
              </Link>
            </li>
            <li className="nav-item" onClick={() => setMenu("mini")}>
              <Link className={`nav-link ${menu === "mini" ? "active" : ""}`} to="/mini">
                3D minimalist Art
              </Link>
            </li>
            <li className="nav-item" onClick={() => setMenu("new")}>
              <Link className={`nav-link ${menu === "new" ? "active" : ""}`} to="/new">
                New In
              </Link>
            </li>
          </ul>

          <div className="nav-login-cart d-flex">
            {localStorage.getItem("auth-token") ? (
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  localStorage.removeItem("auth-token");
                  window.location.replace('/');
                }}
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline-danger rounded-5">Login</button>
              </Link>
            )}
            <Link to="/cart">
              <img src={cart_icon} alt="Cart" className="cart-icon ms-3" />
            </Link>
          </div>

          <div className="nav-login-cart">
            {localStorage.getItem("auth-token") ? (
              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  window.location.replace('/myorders');
                }}
              >
                My Orders
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
