import React from 'react';

function Nav() {
    return (
        <div>
            {/* =============== START OF PRELOADER =============== */}
            <div className="loading">
                <div className="loading-inner">
                    <div className="loading-effect">
                        <div className="object" />
                    </div>
                </div>
            </div>
            {/* =============== END OF PRELOADER =============== */}
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
                {/* =============== END OF HEADER NAVIGATION =============== */}
                {/* =============== START OF SLIDER REVOLUTION SECTION =============== */}
                <section id="slider" className="full-slider">
                    <div className="rev-slider-wrapper fullscreen-container overlay-gradient">
                        <div id="fullscreen-slider" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.1">
                            <ul>
                                {/* ===== SLIDE NR. 1 ===== */}
                                <li data-transition="fade">
                                    {/* MAIN IMAGE */}
                                    <img src="assets/images/slider/slider1.jpg" alt="Image" title="slider-bg" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                                    {/* LAYER NR. 1 */}
                                    <div className="tp-caption tp-resizeme" data-x="center" data-hoffset data-y="middle" data-voffset="['-30','-30','-30','-30']" data-responsive_offset="on" data-fontsize="['60','50','40','30']" data-lineheight="['60','50','40','30']" data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{ zIndex: 5, color: '#fff', fontWeight: 900 }}>START STREAMING NOW
                    </div>
                                </li>
                                {/* ===== SLIDE NR. 2 ===== */}
                                <li data-transition="fade" data-slotamount={7} data-easein="default" data-easeout="default" data-masterspeed={2000}>
                                    {/* MAIN IMAGE */}
                                    <img src="assets/images/slider/slider2.jpg" alt="Image" title="slider-bg" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                                    {/* LAYER NR. 1 */}
                                    <div className="tp-caption tp-resizeme" data-x="center" data-hoffset data-y="middle" data-voffset="['-30','-30','-30','-30']" data-responsive_offset="on" data-fontsize="['60','50','40','30']" data-lineheight="['60','50','40','30']" data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{ zIndex: 5, color: '#fff', fontWeight: 900 }}>ULTRA HD RESOLUTION
                    </div>
                                </li>
                                {/* ===== SLIDE NR. 3 ===== */}
                                <li data-transition="fade" data-slotamount={7} data-easein="default" data-easeout="default" data-masterspeed={2000}>
                                    {/* MAIN IMAGE */}
                                    <img src="assets/images/slider/slider3.jpg" alt="Image" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={3} className="rev-slidebg" data-no-retina />
                                    {/* LAYER NR. 1 */}
                                    <div className="tp-caption tp-resizeme" data-x="center" data-hoffset data-y="middle" data-voffset="['-30','-30','-30','-30']" data-responsive_offset="on" data-fontsize="['60','50','40','30']" data-lineheight="['60','50','40','30']" data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{ zIndex: 5, color: '#fff', fontWeight: 900 }}>LATEST MOVIES &amp; SERIES
                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* ===== END OF REV SLIDER WRAPPER ===== */}
                    {/* ===== START OF SEARCH FORM WRAPPER ===== */}
                    <div className="search-form-wrapper search-form-rev">
                        <div className="container">
                            {/* ===== START OF SEARCH FORM ===== */}
                            <form id="search-form-1">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 col-sm-10 col-12">
                                        <div className="form-group">
                                            <input name="search-keyword" type="text" id="search-keyword" defaultValue className="form-control" placeholder="Enter Movies or Series Title" />
                                            <button type="submit" className="btn btn-main btn-effect"><i className="fa fa-search" /></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* ===== END OF SEARCH FORM ===== */}
                        </div>
                    </div>
                    {/* ===== END OF SEARCH FORM WRAPPER ===== */}
                </section>
                {/* =============== START OF SLIDER REVOLUTION SECTION =============== */}
                {/* =============== START OF LATEST MOVIES SECTION =============== */}
                <section className="latest-movies ptb100">
                    <div className="container">
                        {/* Start of row */}
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="title">Latest Movies</h2>
                            </div>
                            <div className="col-md-4 align-self-center text-right">
                                <a href="#" className="btn btn-icon btn-main btn-effect">
                                    view all
                    <i className="ti-angle-double-right" />
                                </a>
                            </div>
                        </div>
                        {/* End of row */}
                        {/* Start of Latest Movies Slider */}
                        <div className="owl-carousel latest-movies-slider mt20">
                            {/* === Start of Sliding Item 1 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-1.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">Star Wars</a>
                                        </h4>
                                        <span className="released">14 Dec 2017</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <span>7.5 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 1 === */}
                            {/* === Start of Sliding Item 2 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-2.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">The Brain</a>
                                        </h4>
                                        <span className="released">20 Dec 2017</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <span>7.2 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 2 === */}
                            {/* === Start of Sliding Item 3 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-3.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">The Mummy</a>
                                        </h4>
                                        <span className="released">9 Jun 2017</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <span>5.5 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 3 === */}
                            {/* === Start of Sliding Item 4 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-4.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">The Parrot</a>
                                        </h4>
                                        <span className="released">20 Jan 2017</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <span>5.2 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 4 === */}
                            {/* === Start of Sliding Item 5 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-1.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">Star Wars</a>
                                        </h4>
                                        <span className="released">14 Dec 2017</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <span>7.5 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 5 === */}
                            {/* === Start of Sliding Item 6 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-2.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">The Brain</a>
                                        </h4>
                                        <span className="released">20 Dec 2017</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <span>7.2 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 6 === */}
                        </div>
                        {/* End of Latest Movies Slider */}
                    </div>
                </section>
                {/* =============== END OF LATEST MOVIES SECTION =============== */}
                {/* =============== START OF UPCOMING MOVIES SECTION =============== */}
                <section className="upcoming-movies parallax ptb100" data-background="assets/images/posters/movie-collection.jpg" data-color="#3e4555" data-color-opacity="0.95">
                    <div className="container">
                        {/* Start of row */}
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h2 className="title text-white">Upcoming Movies &amp; TV Shows</h2>
                            </div>
                        </div>
                        {/* End of row */}
                        {/* Start of row */}
                        <div className="row mt50">
                            {/* === Start of Upcoming Featured Movies & TV Shows === */}
                            <div className="col-md-8">
                                {/* Start of Upcoming Featured Item */}
                                <div className="movie-box-1 upcoming-featured-item">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/movies/upcoming-featured-item.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">Tomb Raider</a>
                                        </h4>
                                        <span className="released">Release Date: 15 Mar 2018</span>
                                    </div>
                                    {/* End of Movie Details */}
                                </div>
                                {/* End of Upcoming Featured Item */}
                            </div>
                            {/* === End of Upcoming Featured Movies & TV Shows === */}
                            {/* === Start of Upcoming Movies & TV Shows === */}
                            <div className="col-md-4">
                                {/* Start of Upcoming Item 1 */}
                                <div className="movie-box-1 upcoming-item">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/movies/upcoming-item-1.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">The Jungle</a>
                                        </h4>
                                    </div>
                                    {/* End of Movie Details */}
                                </div>
                                {/* End of Upcoming Item 1 */}
                                {/* Start of Upcoming Item 2 */}
                                <div className="movie-box-1 upcoming-item mt20">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/movies/upcoming-item-2.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">Fast and Furious</a>
                                        </h4>
                                    </div>
                                    {/* End of Movie Details */}
                                </div>
                                {/* End of Upcoming Item 2 */}
                            </div>
                            {/* === End of Upcoming Movies & TV Shows === */}
                        </div>
                        {/* End of row */}
                    </div>
                </section>
                {/* =============== END OF UPCOMING MOVIES SECTION =============== */}
                {/* =============== START OF LATEST TV SHOW SECTION =============== */}
                <section className="latest-tvshows ptb100">
                    <div className="container">
                        {/* Start of row */}
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <h2 className="title">Latest TV Shows</h2>
                            </div>
                            <div className="col-md-4 col-sm-12 align-self-center text-right">
                                <a href="#" className="btn btn-icon btn-main btn-effect">
                                    view all
                    <i className="ti-angle-double-right" />
                                </a>
                            </div>
                        </div>
                        {/* End of row */}
                        {/* Start of Latest Movies Slider */}
                        <div className="owl-carousel latest-tvshows-slider mt20">
                            {/* === Start of Sliding Item 1 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-5.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">Daredevil</a>
                                        </h4>
                                        <span className="released">19 Apr 2015</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-o" />
                                        </div>
                                        <span>8.7 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 1 === */}
                            {/* === Start of Sliding Item 2 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-6.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">Stranger Things</a>
                                        </h4>
                                        <span className="released">15 Jul 2016</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-o" />
                                        </div>
                                        <span>9 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 2 === */}
                            {/* === Start of Sliding Item 3 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-7.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">Luke Cage</a>
                                        </h4>
                                        <span className="released">30 Sep 2016</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-o" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <span>7.6 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 3 === */}
                            {/* === Start of Sliding Item 4 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-8.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">The Flash</a>
                                        </h4>
                                        <span className="released">7 Oct 2014</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-o" />
                                        </div>
                                        <span>8 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 4 === */}
                            {/* === Start of Sliding Item 5 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-5.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">Daredevil</a>
                                        </h4>
                                        <span className="released">19 Apr 2015</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-o" />
                                        </div>
                                        <span>8.7 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 5 === */}
                            {/* === Start of Sliding Item 6 === */}
                            <div className="item">
                                {/* Start of Movie Box */}
                                <div className="movie-box-1">
                                    {/* Start of Poster */}
                                    <div className="poster">
                                        <img src="assets/images/posters/poster-6.jpg" alt />
                                    </div>
                                    {/* End of Poster */}
                                    {/* Start of Buttons */}
                                    <div className="buttons">
                                        <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                    {/* End of Buttons */}
                                    {/* Start of Movie Details */}
                                    <div className="movie-details">
                                        <h4 className="movie-title">
                                            <a href="movie-detail.html">Stranger Things</a>
                                        </h4>
                                        <span className="released">15 Jul 2016</span>
                                    </div>
                                    {/* End of Movie Details */}
                                    {/* Start of Rating */}
                                    <div className="stars">
                                        <div className="rating">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star-half-o" />
                                        </div>
                                        <span>9 / 10</span>
                                    </div>
                                    {/* End of Rating */}
                                </div>
                                {/* End of Movie Box */}
                            </div>
                            {/* === End of Sliding Item 6 === */}
                        </div>
                        {/* End of Latest Movies Slider */}
                    </div>
                </section>
                {/* =============== END OF LATEST TV SHOW SECTION =============== */}
                {/* =============== START OF HOW IT WORKS SECTION =============== */}
                <section className="how-it-works bg-light ptb100">
                    <div className="container">
                        {/* Start of row */}
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h2 className="title">How it works?</h2>
                                <h6 className="subtitle">We will show you step by step how to start watching your favorite movies &amp; tv shows starting now!</h6>
                            </div>
                        </div>
                        {/* End of row */}
                        {/* Start of Timeline */}
                        <div className="timeline">
                            <span className="main-line" />
                            {/* === Start of Timeline Step 1 === */}
                            <div className="timeline-step row">
                                <span className="timeline-step-btn">Step 1</span>
                                {/* Start of Timeline Text */}
                                <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                                    <div className="timeline-text">
                                        <h3>Create an account</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                {/* End of Timeline Text */}
                                {/* Start of Timeline Image */}
                                <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                                    <div className="timeline-image">
                                        <img src="assets/images/other/signup.png" alt />
                                    </div>
                                </div>
                                {/* End of Timeline Image */}
                            </div>
                            {/* === End of Timeline Step 1 === */}
                            {/* === Start of Timeline Step 2 === */}
                            <div className="timeline-step row">
                                <span className="timeline-step-btn" style={{ color: '#2a7bc2', background: '#c1ddf5' }}>Step 2</span>
                                {/* Start of Timeline Image */}
                                <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                                    <div className="timeline-image">
                                        <img src="assets/images/other/pricing.png" alt />
                                    </div>
                                </div>
                                {/* End of Timeline Image */}
                                {/* Start of Timeline Text */}
                                <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                                    <div className="timeline-text-right">
                                        <h3>Choose your Plan</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                {/* End of Timeline Text */}
                            </div>
                            {/* === End of Timeline Step 2 === */}
                            {/* === Start of Timeline Step 3 === */}
                            <div className="timeline-step row">
                                <span className="timeline-step-btn" style={{ color: '#eb305f', background: '#f9c8d4' }}>Step 3</span>
                                {/* Start of Timeline Text */}
                                <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                                    <div className="timeline-text">
                                        <h3>Enjoy Movify</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                {/* End of Timeline Text */}
                                {/* Start of Timeline Image */}
                                <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                                    <div className="timeline-image">
                                        <img src="assets/images/other/enjoy-movify.png" alt />
                                    </div>
                                </div>
                                {/* End of Timeline Image */}
                            </div>
                            {/* === End of Timeline Step 3 === */}
                        </div>
                        {/* End of Timeline */}
                    </div>
                </section>
                {/* =============== END OF HOW IT WORKS SECTION =============== */}
                {/* =============== END OF COUNTER SECTION =============== */}
                <section className="counter bg-main-gradient ptb50 text-center">
                    <div className="container">
                        <div className="row">
                            {/* 1st Count up item */}
                            <div className="col-md-4 col-sm-12">
                                <span className="counter-item" data-from={0} data-to={964}>0</span>
                                <h4>Movies</h4>
                            </div>
                            {/* 2nd Count up item */}
                            <div className="col-md-4 col-sm-12">
                                <span className="counter-item" data-from={0} data-to={743}>0</span>
                                <h4>TV Shows</h4>
                            </div>
                            {/* 3rd Count up item */}
                            <div className="col-md-4 col-sm-12">
                                <span className="counter-item" data-from={0} data-to={1207}>0</span>
                                <h4>Users</h4>
                            </div>
                        </div>
                    </div>
                </section>
                {/* =============== END OF COUNTER SECTION =============== */}
                {/* =============== END OF BECOME PREMIUM SECTION =============== */}
                <section className="become-premium ptb100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 mb50">
                                <h3 className="title">Become a Premium Member</h3>
                                <h6 className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</h6>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                {/* Start of Pricing Table */}
                                <div className="pricing-table-1">
                                    {/* ===== Start of Featured Holder ===== */}
                                    <div className="features-holder">
                                        <div className="features-title">
                                            <h5>What You Get</h5>
                                        </div>
                                        {/* Start of Features List */}
                                        <div className="features-list-wrapper">
                                            <ul className="features-list">
                                                {/* List Item */}
                                                <li>
                                                    <h6>HD available</h6>
                                                </li>
                                                {/* List Item */}
                                                <li>
                                                    <h6>Ultra HD available</h6>
                                                </li>
                                                {/* List Item */}
                                                <li>
                                                    <h6>Unlimited Movies and TV shows</h6>
                                                </li>
                                                {/* List Item */}
                                                <li>
                                                    <h6>Watch on your phone &amp; tablet</h6>
                                                </li>
                                                {/* List Item */}
                                                <li>
                                                    <h6>Download and watch offline</h6>
                                                </li>
                                                {/* List Item */}
                                                <li>
                                                    <h6>Screens you can watch</h6>
                                                </li>
                                                {/* List Item */}
                                                <li>
                                                    <h6>First Month Free</h6>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* Start of Features List */}
                                    </div>
                                    {/* ===== End of Featured Holder ===== */}
                                    {/* ===== Start of Price Table Featured ===== */}
                                    <div className="price-table price-table-featured">
                                        {/* Start of Table Header */}
                                        <div className="table-header">
                                            <h5>Premium</h5>
                                        </div>
                                        {/* End of Table Header */}
                                        {/* Start Table Content */}
                                        <div className="table-content">
                                            <ul>
                                                <li><i className="fa fa-check" /></li>
                                                <li><i className="fa fa-check" /></li>
                                                <li><i className="fa fa-check" /></li>
                                                <li><i className="fa fa-check" /></li>
                                                <li><i className="fa fa-check" /></li>
                                                <li>5</li>
                                                <li><i className="fa fa-check" /></li>
                                            </ul>
                                        </div>
                                        {/* End Table Content */}
                                        {/* Start Table Footer */}
                                        <div className="table-footer">
                                            <div className="price-holder">
                                                <span className="currency">$</span>
                                                <span className="price">19.99</span>
                                                <span className="time">/ mon</span>
                                            </div>
                                            <a href="#" target="_self" className="btn btn-main btn-effect"><i className="fa fa-shopping-cart" /></a>
                                        </div>
                                        {/* End Table Footer */}
                                    </div>
                                    {/* ===== End of Price Table Featured ===== */}
                                    {/* ===== Start of Price Table ===== */}
                                    <div className="price-table">
                                        {/* Start of Table Header */}
                                        <div className="table-header">
                                            <h5>Basic</h5>
                                        </div>
                                        {/* End of Table Header */}
                                        {/* Start Table Content */}
                                        <div className="table-content">
                                            <ul>
                                                <li><i className="fa fa-check" /></li>
                                                <li><i className="fa fa-times" /></li>
                                                <li><i className="fa fa-check" /></li>
                                                <li><i className="fa fa-times" /></li>
                                                <li><i className="fa fa-times" /></li>
                                                <li>1</li>
                                                <li><i className="fa fa-check" /></li>
                                            </ul>
                                        </div>
                                        {/* End Table Content */}
                                        {/* Start Table Footer */}
                                        <div className="table-footer">
                                            <div className="price-holder">
                                                <span className="currency">$</span>
                                                <span className="price">9.99</span>
                                                <span className="time">/ mon</span>
                                            </div>
                                            <a href="#" target="_self" className="btn btn-main btn-effect"><i className="fa fa-shopping-cart" /></a>
                                        </div>
                                        {/* End Table Footer */}
                                    </div>
                                    {/* ===== End of Price Table ===== */}
                                </div>
                                {/* End of Pricing Table */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* =============== END OF BECOME PREMIUM SECTION =============== */}
                {/* =============== END OF BLOG SECTION =============== */}
                <section className="blog bg-light ptb100">
                    <div className="container">
                        {/* Start of row */}
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h2 className="title">Latest News</h2>
                                <h6 className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy consectetuer adipiscing.</h6>
                            </div>
                        </div>
                        {/* End of row */}
                        {/* Start of row */}
                        <div className="row mt50">
                            {/* 1st Blog Item */}
                            <div className="col-md-4">
                                <div className="bloglist-post-holder shadow-hover">
                                    {/* Blog Post Thumbnail */}
                                    <a href="blog-post-detail.html" className="bloglist-thumb-link hover-link">
                                        <div className="bloglist-post-thumbnail" style={{ background: 'url(assets/images/blog/bloglist-1.jpg)' }} />
                                    </a>
                                    {/* Blog Post Text Wrapper */}
                                    <div className="bloglist-text-wrapper">
                                        {/* Author Avatar */}
                                        <span className="circle-img bloglist-avatar">
                                            <img src="assets/images/user.png" width={50} height={50} alt="author img" />
                                        </span>
                                        <h4 className="bloglist-title">
                                            <a href="blog-post-detail.html">Top 10 Action Movies</a>
                                        </h4>
                                        <div className="bloglist-meta">
                                            <i className="fa fa-calendar" /> 01/02/2018
                      </div>
                                        <div className="bloglist-excerpt">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...</p>
                                            <a href="#" className="btn btn-main btn-effect">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd Blog Item */}
                            <div className="col-md-4">
                                <div className="bloglist-post-holder shadow-hover">
                                    {/* Blog Post Thumbnail */}
                                    <a href="blog-post-detail.html" className="bloglist-thumb-link hover-link">
                                        <div className="bloglist-post-thumbnail" style={{ background: 'url(assets/images/blog/bloglist-2.jpg)' }} />
                                    </a>
                                    {/* Blog Post Text Wrapper */}
                                    <div className="bloglist-text-wrapper">
                                        {/* Author Avatar */}
                                        <span className="circle-img bloglist-avatar">
                                            <img src="assets/images/user.png" width={50} height={50} alt="author img" />
                                        </span>
                                        <h4 className="bloglist-title">
                                            <a href="blog-post-detail.html">Oscar Awards</a>
                                        </h4>
                                        <div className="bloglist-meta">
                                            <i className="fa fa-calendar" /> 01/02/2018
                      </div>
                                        <div className="bloglist-excerpt">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...</p>
                                            <a href="#" className="btn btn-main btn-effect">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 3rd Blog Item */}
                            <div className="col-md-4">
                                <div className="bloglist-post-holder shadow-hover">
                                    {/* Blog Post Thumbnail */}
                                    <a href="blog-post-detail.html" className="bloglist-thumb-link hover-link">
                                        <div className="bloglist-post-thumbnail" style={{ background: 'url(assets/images/blog/bloglist-3.jpg)' }} />
                                    </a>
                                    {/* Blog Post Text Wrapper */}
                                    <div className="bloglist-text-wrapper">
                                        {/* Author Avatar */}
                                        <span className="circle-img bloglist-avatar">
                                            <img src="assets/images/user.png" width={50} height={50} alt="author img" />
                                        </span>
                                        <h4 className="bloglist-title">
                                            <a href="blog-post-detail.html">Top Upcoming Movies</a>
                                        </h4>
                                        <div className="bloglist-meta">
                                            <i className="fa fa-calendar" /> 01/02/2018
                      </div>
                                        <div className="bloglist-excerpt">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...</p>
                                            <a href="#" className="btn btn-main btn-effect">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of row */}
                    </div>
                </section>
                {/* =============== END OF BLOG SECTION =============== */}
                {/* =============== END OF SUBSCRIBE SECTION =============== */}
                <section className="subscribe bg-light2 ptb100">
                    <div className="container">
                        {/* Start of row */}
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center">
                                <h2 className="title">Join Movify Now!</h2>
                                <h6 className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy consectetuer adipiscing.</h6>
                            </div>
                        </div>
                        {/* End of row */}
                        {/* Start of row */}
                        <div className="row justify-content-center">
                            <div className="col-md-7 col-sm-10 col-12">
                                {/* Subscribe Form */}
                                <form action="#" className="mailchimp mt50" noValidate>
                                    {/* Form */}
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input type="email" name="EMAIL" className="form-control" id="mc-email" placeholder="Your Email" autoComplete="off" />
                                            <label htmlFor="mc-email" />
                                            <button type="submit" className="btn btn-main btn-effect">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* End of row */}
                    </div>
                </section>
                {/* =============== END OF SUBSCRIBE SECTION =============== */}
                {/* =============== START OF FOOTER =============== */}
                <footer className="footer1 bg-dark">
                    {/* ===== START OF FOOTER WIDGET AREA ===== */}
                    <div className="footer-widget-area ptb100">
                        <div className="container">
                            <div className="row">
                                {/* Start of Widget 1 */}
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="widget widget-about">
                                        {/* INSERT YOUR LOGO HERE */}
                                        <img src="assets/images/logo.svg" alt="logo" className="logo" />
                                        {/* INSERT YOUR WHITE LOGO HERE */}
                                        <img src="assets/images/logo-white.svg" alt="white logo" className="logo-white" />
                                        <p className="nomargin">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque. Praesentium suscipit provident explicabo dignissimos nostrum numquam deserunt earum accusantium et fugit.</p>
                                    </div>
                                </div>
                                {/* End of Widget 1 */}
                                {/* Start of Widget 2 */}
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="widget widget-links">
                                        <h4 className="widget-title">Useful links</h4>
                                        <ul className="general-listing">
                                            <li><a href="#">about movify</a></li>
                                            <li><a href="#">blog</a></li>
                                            <li><a href="#">forum</a></li>
                                            <li><a href="#">my account</a></li>
                                            <li><a href="#">watch list</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* End of Widget 2 */}
                                {/* Start of Widget 3 */}
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="widget widget-blog">
                                        <h4 className="widget-title">latest news</h4>
                                        <ul className="blog-posts">
                                            <li><a href="#">blog post 1</a><small>januar 13, 2018</small></li>
                                            <li><a href="#">blog post 2</a><small>januar 13, 2018</small></li>
                                            <li><a href="#">blog post 3</a><small>januar 13, 2018</small></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* End of Widget 3 */}
                                {/* Start of Widget 4 */}
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="widget widget-social">
                                        <h4 className="widget-title">follow us</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque.</p>
                                        {/* Start of Social Buttons */}
                                        <ul className="social-btns">
                                            {/* Social Media */}
                                            <li>
                                                <a href="#" className="social-btn-roll facebook">
                                                    <div className="social-btn-roll-icons">
                                                        <i className="social-btn-roll-icon fa fa-facebook" />
                                                        <i className="social-btn-roll-icon fa fa-facebook" />
                                                    </div>
                                                </a>
                                            </li>
                                            {/* Social Media */}
                                            <li>
                                                <a href="#" className="social-btn-roll twitter">
                                                    <div className="social-btn-roll-icons">
                                                        <i className="social-btn-roll-icon fa fa-twitter" />
                                                        <i className="social-btn-roll-icon fa fa-twitter" />
                                                    </div>
                                                </a>
                                            </li>
                                            {/* Social Media */}
                                            <li>
                                                <a href="#" className="social-btn-roll google-plus">
                                                    <div className="social-btn-roll-icons">
                                                        <i className="social-btn-roll-icon fa fa-google-plus" />
                                                        <i className="social-btn-roll-icon fa fa-google-plus" />
                                                    </div>
                                                </a>
                                            </li>
                                            {/* Social Media */}
                                            <li>
                                                <a href="#" className="social-btn-roll instagram">
                                                    <div className="social-btn-roll-icons">
                                                        <i className="social-btn-roll-icon fa fa-instagram" />
                                                        <i className="social-btn-roll-icon fa fa-instagram" />
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        {/* End of Social Buttons */}
                                    </div>
                                </div>
                                {/* End of Widget 4 */}
                            </div>
                        </div>
                    </div>
                    {/* ===== END OF FOOTER WIDGET AREA ===== */}
                    {/* ===== START OF FOOTER COPYRIGHT AREA ===== */}
                    <div className="footer-copyright-area ptb30">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex">
                                        <div className="links">
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><a href="#">Privacy &amp; Cookies</a></li>
                                                <li className="list-inline-item"><a href="#">Terms &amp; Conditions</a></li>
                                                <li className="list-inline-item"><a href="#">Legal Disclaimer</a></li>
                                                <li className="list-inline-item"><a href="#">Community</a></li>
                                            </ul>
                                        </div>
                                        <div className="copyright ml-auto">All Rights Reserved by <a href="#">Movify</a>.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ===== END OF FOOTER COPYRIGHT AREA ===== */}
                </footer>
                {/* =============== END OF FOOTER =============== */}
            </div>
            {/* =============== END OF WRAPPER =============== */}
            {/* =============== START OF GENERAL SEARCH WRAPPER =============== */}
            <div className="general-search-wrapper">
                <form className="general-search" role="search" method="get" action="#">
                    <input type="text" placeholder="Type and hit enter..." />
                    <span id="general-search-close" className="ti-close toggle-search" />
                </form>
            </div>
            {/* =============== END OF GENERAL SEARCH WRAPPER =============== */}
            {/* =============== START OF LOGIN & REGISTER POPUP =============== */}
            <div id="login-register-popup" className="small-dialog zoom-anim-dialog mfp-hide">
                {/* ===== Start of Signin wrapper ===== */}
                <div className="signin-wrapper">
                    <div className="small-dialog-headline">
                        <h4 className="text-center">Sign in</h4>
                    </div>
                    <div className="small-dialog-content">
                        {/* Start of Login form */}
                        <form id="cariera_login" method="post">
                            <p className="status" />
                            <div className="form-group">
                                <label htmlFor="username">Username or Email *</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="Your Username or Email *" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password *</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Your Password *" />
                            </div>
                            <div className="form-group">
                                <div className="checkbox pad-bottom-10">
                                    <input id="check1" type="checkbox" name="remember" defaultValue="yes" />
                                    <label htmlFor="check1">Keep me signed in</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" defaultValue="Sign in" className="btn btn-main btn-effect nomargin" />
                            </div>
                        </form>
                        {/* End of Login form */}
                        <div className="bottom-links">
                            <span>
                                Not a member?
                  <a className="signUpClick">Sign up</a>
                            </span>
                            <a className="forgetPasswordClick pull-right">Forgot Password</a>
                        </div>
                    </div>
                </div>
                {/* ===== End of Signin wrapper ===== */}
                {/* ===== Start of Signup wrapper ===== */}
                <div className="signup-wrapper">
                    <div className="small-dialog-headline">
                        <h4 className="text-center">Sign Up</h4>
                    </div>
                    <div className="small-dialog-content">
                        {/* Start of Registration form */}
                        <form id="cariera_registration" action="#" method="POST">
                            <p className="status" />
                            <div className="form-group">
                                <label htmlFor="movify_user_login">Username</label>
                                <input name="movify_user_login" id="movify_user_login" className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="movify_user_email">Email</label>
                                <input name="movify_user_email" id="movify_user_email" className="form-control" type="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input name="movify_user_pass" id="movify_password" className="form-control" type="password" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-main btn-effect nomargin" defaultValue="Register" />
                            </div>
                        </form>
                        {/* End of Registration form */}
                        <div className="bottom-links">
                            <span>
                                Already have an account?
                  <a className="signInClick">Sign in</a>
                            </span>
                            <a className="forgetPasswordClick pull-right">Forgot Password</a>
                        </div>
                    </div> {/* .small-dialog-content */}
                </div>
                {/* ===== End of Signup wrapper ===== */}
                {/* ===== Start of Forget Password wrapper ===== */}
                <div className="forgetpassword-wrapper">
                    <div className="small-dialog-headline">
                        <h4 className="text-center">Forgotten Password</h4>
                    </div>
                    <div className="small-dialog-content">
                        {/* Start of Forger Password form */}
                        <form id="forget_pass_form" action="#" method="post">
                            <p className="status" />
                            <div className="form-group">
                                <label htmlFor="password">Email Address *</label>
                                <input type="email" name="user_login" className="form-control" id="email3" placeholder="Email Address *" />
                            </div>
                            <div className="form-group">
                                <input type="submit" name="submit" defaultValue="Get New Password" className="btn btn-main btn-effect nomargin" />
                            </div>
                        </form>
                        {/* End of Forger Password form */}
                        <div className="bottom-links">
                            <a className="cancelClick">Cancel</a>
                        </div>
                    </div>{/* .small-dialog-content */}
                </div>
                {/* ===== End of Forget Password wrapper ===== */}
            </div>
            {/* =============== END OF LOGIN & REGISTER POPUP =============== */}
            {/* ===== Start of Back to Top Button ===== */}
            <div id="backtotop">
                <a href="#" />
            </div>
        </div>

    )
}
export default Nav;