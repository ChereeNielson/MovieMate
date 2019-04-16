import React from 'react';
import "./style.css";
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
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                    {/* Dropdown Menu */}
                    <ul className="dropdown-menu">
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="friends.html">Home Version 1</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="index2.html">Home Version 2</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="index3.html">Home Version 3</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="index4.html">Home Version 4</a>
                      </li>
                    </ul>
                  </li>
                  {/* Menu Item */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                    {/* Dropdown Menu */}
                    <ul className="dropdown-menu">
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="404.html">404 Page</a>
                      </li>
                      {/* Divider */}
                      <li className="divider" role="separator" />
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="celebrities-list.html">celebrities list</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="celebrities-grid.html">celebrities grid</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="celebrity-detail.html">celebrity detail</a>
                      </li>
                      {/* Divider */}
                      <li className="divider" role="separator" />
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="contact-us.html">Contact us</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="coming-soon.html">Coming soon</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="pricing.html">Pricing Plan</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="login-register.html">Login - Register</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="testimonials.html">Testimonials</a>
                      </li>
                    </ul>
                  </li>
                  {/* Menu Item */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Movies &amp; TV Shows</a>
                    {/* Dropdown Menu */}
                    <ul className="dropdown-menu">
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="movie-list.html">Movie List 1</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="movie-list2.html">Movie List 2</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="movie-grid.html">Movie Grid 1</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="movie-grid2.html">Movie Grid 2</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="movie-grid3.html">Movie Grid 3</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="movie-grid4.html">Movie Grid 4</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="movie-detail.html">Movie Detail</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="movie-detail2.html">Movie Detail 2</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="watch-later.html">Watch Later</a>
                      </li>
                    </ul>
                  </li>
                  {/* Menu Item */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</a>
                    {/* Dropdown Menu */}
                    <ul className="dropdown-menu">
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="blog-list.html">Blog List</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="blog-list-fullwidth.html">Blog List Fullwidth</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="blog-post-detail.html">Blog Detail</a>
                      </li>
                      {/* Menu Item */}
                      <li>
                        <a className="dropdown-item" href="blog-post-detail-fullwidth.html">Blog Detail Fullwidth</a>
                      </li>
                    </ul>
                  </li>
                  {/* Menu Item */}
                  <li className="nav-item">
                    <a className="nav-link" href="contact-us.html">Contact us</a>
                  </li>
                </ul>
                {/* ====== End of Main Menu ====== */}
                {/* ====== Start of Extra Nav ====== */}
                <ul className="navbar-nav extra-nav">
                  {/* Menu Item */}
                  <li className="nav-item">
                    <a className="nav-link toggle-search" href="#">
                      <i className="fa fa-search" />
                    </a>
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