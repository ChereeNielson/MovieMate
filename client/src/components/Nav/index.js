import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
function Nav() {
    return (
      <div className="wrapper">
        {/* =============== START OF HEADER NAVIGATION =============== */}
        {/* Insert the class "sticky" in the header if you want a sticky header */}
        <header className="header header-fixed header-transparent text-white">
          <div className="container-fluid">
            {/* ====== Start of Navbar ====== */}
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                {/* INSERT YOUR LOGO HERE */}
                <img src="assets/images/logo.svg" alt="logo" width={150} className="logo" />
                {/* INSERT YOUR WHITE LOGO HERE */}
                <img src="assets/images/logo-white.svg" alt="white logo" width={150} className="logo-white" />
              </a>
              {/* Login Button on Responsive */}
              <a href="#login-register-popup" className="login-mobile-btn popup-with-zoom-anim"><i className="icon-user" /></a>
              <button id="mobile-nav-toggler" className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
              {/* ====== Start of #main-nav ====== */}
              <div className="navbar-collapse" id="main-nav">
                {/* ====== Start of Main Menu ====== */}
                <ul className="navbar-nav mx-auto" id="main-menu">
                  {/* Menu Item */}
                  <li className="nav-item">
                  <Link to="/">Home</Link>
                    {/* Dropdown Menu */}
                  </li>
                  {/* Menu Item */}
                  <li className="nav-item">
                  <Link to="/friends">Friends</Link>
                  </li>
                  {/* Menu Item */}
                  <li className="nav-item">
                  <Link to="/watchlist">Watch List</Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/about">About Us</Link>
                  </li>
                </ul>
                {/* ====== End of Main Menu ====== */}
                {/* ====== Start of Extra Nav ====== */}
                <ul className="navbar-nav extra-nav">
                  {/* Menu Item */}
                  <li className="nav-item">
                  <Link to="/search" className="toggle-search nav-link"><i className="fa fa-search" /></Link>
                   
                  </li>
                  {/* Menu Item */}
                  <li className="nav-item notification-wrapper">
                    <a className="nav-link notification" href="#">
                      <i className="fa fa-globe" />
                      <span className="notification-count">2</span>
                    </a>
                  </li>
                  {/* Menu Item */}
                  <li className="nav-item m-auto">
                    <a href="#login-register-popup" className="btn btn-main btn-effect login-btn popup-with-zoom-anim">
                      <i className="icon-user" />login
                    </a>
                  </li>
                </ul>
                {/* ====== End of Extra Nav ====== */}
              </div>
              {/* ====== End of #main-nav ====== */}
            </nav>
            {/* ====== End of Navbar ====== */}
          </div>
        </header>
      </div>

    )
}
export default Nav;