import React, { Component } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
class Nav extends Component {
  state = {
    isAuthenticated: false
  }
  componentDidMount() {
    let data = sessionStorage.getItem('userID');
    this.authenticationCheck(data)
  }
  authenticationCheck = (data) => {
    if (data != null) {
      this.setState({ isAuthenticated: true })
    }
  }
  signOut = () => {
    sessionStorage.removeItem('userID')
    this.setState({
      isAuthenticated: false
    })
    window.location.reload();
  }

  render() {
    return (
      <div>
        {/* =============== START OF RESPONSIVE - MAIN NAV =============== */}
        <nav id="main-mobile-nav" />
        {/* =============== END OF RESPONSIVE - MAIN NAV =============== */}
        {/* =============== START OF WRAPPER =============== */}
        <div className="wrapper">
          {/* =============== START OF HEADER NAVIGATION =============== */}
          {/* Insert the class "sticky" in the header if you want a sticky header */}
          <header className="header header-fixed header-transparent text-white">
            <div className="container-fluid">
              {/* ====== Start of Navbar ====== */}
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/">
                  {/* INSERT YOUR LOGO HERE */}
                  <img src="assets/images/movie-mate-caps.svg" alt="logo" width={150} className="logo" />
                  {/* INSERT YOUR WHITE LOGO HERE */}
                  <img src="assets/images/movie-mate-caps-white.svg" alt="white logo" width={150} className="logo-white" />
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
                    <Link to="/friends">Friends</Link>
                    </li>
                    {/* Menu Item */}
                    <li className="nav-item">
                    <Link to="/watchlist">Watch List</Link>
                    </li>
                  </ul>
                  {/* ====== End of Main Menu ====== */}
                  {/* ====== Start of Extra Nav ====== */}
                  <ul className="navbar-nav extra-nav">
                    {/* Menu Item SEARCH */}
                    <li className="nav-item">
                    <Link to="/search" className="toggle-search nav-link"><i className="fa fa-search" /></Link>
                    </li>
                    {/* Menu Item LOGIN */}
                    {this.state.isAuthenticated ?
                    <li onClick={this.signOut} className="nav-item">
                      <Link to="/" className="btn btn-main btn-effect login-btn">
                        <i className="icon-user" />sign out
                    </Link>
                    </li> :
                    <li className="nav-item">
                      <Link to="/login" className="btn btn-main btn-effect login-btn">
                        <i className="icon-user" />login
                    </Link>
                    </li>
                  }
                  </ul>
                  {/* ====== End of Extra Nav ====== */}
                </div>
                {/* ====== End of #main-nav ====== */}
              </nav>
              {/* ====== End of Navbar ====== */}
            </div>
          </header>
          {/* =============== END OF HEADER NAVIGATION =============== */}
        </div>
      </div>

    )
  }
}
export default Nav;