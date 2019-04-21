import React, { Component } from 'react';
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
class Home extends Component {
    render() {
        return (
            <div>

                <div className="wrapper">
                    <Nav /> <br></br><br></br>
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
                                        <div className="tp-caption tp-resizeme" data-x="center" data-hoffset data-y="middle" data-voffset="['-30','-30','-30','-30']" data-responsive_offset="on" data-fontsize="['60','50','40','30']" data-lineheight="['60','50','40','30']" data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{ zIndex: 5, color: '#fff', fontWeight: 900 }}>START WATCHING NOW
                          </div>
                                    </li>
                                    {/* ===== SLIDE NR. 2 ===== */}
                                    <li data-transition="fade" data-slotamount={7} data-easein="default" data-easeout="default" data-masterspeed={2000}>
                                        {/* MAIN IMAGE */}
                                        <img src="assets/images/slider/slider2.jpg" alt="Image" title="slider-bg" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                                        {/* LAYER NR. 1 */}
                                        <div className="tp-caption tp-resizeme" data-x="center" data-hoffset data-y="middle" data-voffset="['-30','-30','-30','-30']" data-responsive_offset="on" data-fontsize="['60','50','40','30']" data-lineheight="['60','50','40','30']" data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{ zIndex: 5, color: '#fff', fontWeight: 900 }}>CONNECT WITH FRIENDS
                          </div>
                                    </li>
                                    {/* ===== SLIDE NR. 3 ===== */}
                                    <li data-transition="fade" data-slotamount={7} data-easein="default" data-easeout="default" data-masterspeed={2000}>
                                        {/* MAIN IMAGE */}
                                        <img src="assets/images/slider/slider3.jpg" alt="Image" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={3} className="rev-slidebg" data-no-retina />
                                        {/* LAYER NR. 1 */}
                                        <div className="tp-caption tp-resizeme" data-x="center" data-hoffset data-y="middle" data-voffset="['-30','-30','-30','-30']" data-responsive_offset="on" data-fontsize="['60','50','40','30']" data-lineheight="['60','50','40','30']" data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{ zIndex: 5, color: '#fff', fontWeight: 900 }}>SEARCH FOR FAVORITES/SAVE YOUR FAVORITES
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
                                    <h2 className="title">Staff Picks</h2>
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
                                            <a href="https://https://youtu.be/kWhAfsvypXs" className="play-video">
                                                {/* <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" class="play-video"> */}
                                                <i className="fa fa-play" />
                                            </a>
                                        </div>
                                        {/* End of Buttons */}
                                        {/* Start of Movie Details */}
                                        <div className="movie-details">
                                            <h4 className="movie-title">
                                                <a href="movie-detail.html">Star Wars IX</a>
                                            </h4>
                                            <span className="released">20 Dec 2019</span>
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
                                    <h2 className="title text-white">Upcoming Movies</h2>
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
                                            <img src="assets/images/movies/ToyStory4.jpg" alt />
                                        </div>
                                        {/* End of Poster */}
                                        {/* Start of Buttons */}
                                        <div className="buttons">
                                            <a href="https://youtu.be/wmiIUN-7qhE" className="play-video">
                                                <i className="fa fa-play" />
                                            </a>
                                        </div>
                                        {/* End of Buttons */}
                                        {/* Start of Movie Details */}
                                        <div className="movie-details">
                                            <h4 className="movie-title">
                                                <a href="movie-detail.html">Toy Story 4</a>
                                            </h4>
                                            <span className="released">Release Date: 21 Jun 2019</span>
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
                                            <img src="assets/images/movies/Aladdin.jpg" alt />
                                        </div>
                                        {/* End of Poster */}
                                        {/* Start of Buttons */}
                                        <div className="buttons">
                                            <a href="https://youtu.be/foyufD52aog" className="play-video">
                                                <i className="fa fa-play" />
                                            </a>
                                        </div>
                                        {/* End of Buttons */}
                                        {/* Start of Movie Details */}
                                        <div className="movie-details">
                                            <h4 className="movie-title">
                                                <a href="movie-detail.html">Aladdin</a>
                                            </h4>
                                            <span className="released">Release Date: 24 May 2019</span>
                                        </div>
                                        {/* End of Movie Details */}
                                    </div>
                                    {/* End of Upcoming Item 1 */}
                                    {/* Start of Upcoming Item 2 */}
                                    <div className="movie-box-1 upcoming-item mt20">
                                        {/* Start of Poster */}
                                        <div className="poster">
                                            <img src="assets/images/movies/LionKing.jpg" alt />
                                        </div>
                                        {/* End of Poster */}
                                        {/* Start of Buttons */}
                                        <div className="buttons">
                                            <a href="https://youtu.be/7TavVZMewpY" className="play-video">
                                                <i className="fa fa-play" />
                                            </a>
                                        </div>
                                        {/* End of Buttons */}
                                        {/* Start of Movie Details */}
                                        <div className="movie-details">
                                            <h4 className="movie-title">
                                                <a href="movie-detail.html">The Lion King</a>
                                            </h4>
                                            <span className="released">Release Date: 19 Jul 2019</span>
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
                                    <h2 className="title">Latest Movies</h2>
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
                                            <img src="assets/images/posters/Glass.jpg" alt />
                                        </div>
                                        {/* End of Poster */}
                                        {/* Start of Buttons */}
                                        <div className="buttons">
                                            <a href="https://youtu.be/Q7ztHi9ejp4" className="play-video">
                                                <i className="fa fa-play" />
                                            </a>
                                        </div>
                                        {/* End of Buttons */}
                                        {/* Start of Movie Details */}
                                        <div className="movie-details">
                                            <h4 className="movie-title">
                                                <a href="movie-detail.html">Glass</a>
                                            </h4>
                                            <span className="released">18 Jan 2019</span>
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
                                            <img src="assets/images/posters/CaptainMarvel.jpg" alt />
                                        </div>
                                        {/* End of Poster */}
                                        {/* Start of Buttons */}
                                        <div className="buttons">
                                            <a href="https://youtu.be/0LHxvxdRnYc" className="play-video">
                                                <i className="fa fa-play" />
                                            </a>
                                        </div>
                                        {/* End of Buttons */}
                                        {/* Start of Movie Details */}
                                        <div className="movie-details">
                                            <h4 className="movie-title">
                                                <a href="movie-detail.html">Captain Marvel</a>
                                            </h4>
                                            <span className="released">8 Mar 2019</span>
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
                                            <a href="https://youtu.be/VllcgXSIJkE" className="play-video">
                                                <i className="fa fa-play" />
                                            </a>
                                        </div>
                                        {/* End of Buttons */}
                                        {/* Start of Movie Details */}
                                        <div className="movie-details">
                                            <h4 className="movie-title">
                                                <a href="movie-detail.html">Pet Sematary</a>
                                            </h4>
                                            <span className="released">5 Apr 2019</span>
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
                                    <h6 className="subtitle">We will show you step by step how to start watching your favorite movies with your favorite friends starting now!</h6>
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
                                            <h3>Create an Account</h3>
                                            <p>Click <i>login</i> at the top of the page to sign in or create an account with us. To get started, search for your favorite movies or series and begin building your library. Feel free to add favorites, share with friends or build a watch list to enjoy later.</p>
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
                                            <img src="assets/images/other/FerrisBueller.jpg" alt height={400} width={400} />
                                        </div>
                                    </div>
                                    {/* End of Timeline Image */}
                                    {/* Start of Timeline Text */}
                                    <div className="col-md-6 col-sm-12 timeline-text-wrapper">
                                        <div className="timeline-text-right">
                                            <h3>Connect with Friends</h3>
                                            <p>Invite and add friends to MovieMate using the <i>friends</i> tab at the top of the page. Create groups of friends to easily plan movie nights and premiere parties! MovieMate also helps you to discover upcoming movie’s, blockbuster hits and friends’ favorites based on sharing recommendations.</p>
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
                                            <h3>Enjoy MovieMate</h3>
                                            <p>Create watchlists and favorites to share movies with your mates!</p>
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
                    {/* =============== START OF COUNTER SECTION =============== */}
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
                                    <h4>Friends</h4>
                                </div>
                                {/* 3rd Count up item */}
                                <div className="col-md-4 col-sm-12">
                                    <span className="counter-item" data-from={0} data-to={1207}>0</span>
                                    <h4>Favorites</h4>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* =============== END OF COUNTER SECTION =============== */}
                    {/* =============== START OF LATEST NEWS SECTION =============== */}
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
                                        <a href="https://www.marvel.com/movies" target="_blank" className="bloglist-thumb-link hover-link">
                                            <div className="bloglist-post-thumbnail" style={{ background: 'url(assets/images/blog/Marvel.jpg)' }} />
                                        </a>
                                        {/* Blog Post Text Wrapper */}
                                        <div className="bloglist-text-wrapper">
                                            {/* Author Avatar */}
                                            {/* <span class="circle-img bloglist-avatar">
                                          <img src="assets/images/user.png" width="50" height="50" alt="author img">
                                      </span> */}
                                            <h4 className="bloglist-title">
                                                <a href="blog-post-detail.html">Marvel Movies</a>
                                            </h4>
                                            <div className="bloglist-meta">
                                                <i className="fa fa-calendar" /> 01/01/2019
                            </div>
                                            <div className="bloglist-excerpt">
                                                <p>The time is now! Click here to get all caught up on the Marvel madness.</p>
                                                <a href="https://www.marvel.com/movies" target="_blank" className="btn btn-main btn-effect">marvel</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 2nd Blog Item */}
                                <div className="col-md-4">
                                    <div className="bloglist-post-holder shadow-hover">
                                        {/* Blog Post Thumbnail */}
                                        <a href="https://www.oscars.org/oscars" target="_blank" className="bloglist-thumb-link hover-link">
                                            <div className="bloglist-post-thumbnail" style={{ background: 'url(assets/images/blog/Oscars2019.jpg)' }} />
                                        </a>
                                        {/* Blog Post Text Wrapper */}
                                        <div className="bloglist-text-wrapper">
                                            {/* Author Avatar */}
                                            {/* <span class="circle-img bloglist-avatar">
                                          <img src="assets/images/user.png" width="50" height="50" alt="author img">
                                      </span> */}
                                            <h4 className="bloglist-title">
                                                <a href="blog-post-detail.html">Oscar Awards</a>
                                            </h4>
                                            <div className="bloglist-meta">
                                                <i className="fa fa-calendar" /> 02/24/2019
                            </div>
                                            <div className="bloglist-excerpt">
                                                <p>Click here to access the official page for the 2019 Oscars!</p>
                                                <a href="https://www.oscars.org/oscars" target="_blank" className="btn btn-main btn-effect">oscars</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 3rd Blog Item */}
                                <div className="col-md-4">
                                    <div className="bloglist-post-holder shadow-hover">
                                        {/* Blog Post Thumbnail */}
                                        <a href="https://www.rollingstone.com/movies/movie-lists/50-greatest-romantic-comedies-of-all-time-790068/crazy-rich-asians-2018-792254/" target="_blank" className="bloglist-thumb-link hover-link">
                                            <div className="bloglist-post-thumbnail" style={{ background: 'url(assets/images/blog/90sRomComs.jpg)' }} />
                                        </a>
                                        {/* Blog Post Text Wrapper */}
                                        <div className="bloglist-text-wrapper">
                                            {/* Author Avatar */}
                                            {/* <span class="circle-img bloglist-avatar">
                                          <img src="assets/images/user.png" width="50" height="50" alt="author img">
                                      </span> */}
                                            <h4 className="bloglist-title">
                                                <a href="blog-post-detail.html">50 Greatest Rom-Coms</a>
                                            </h4>
                                            <div className="bloglist-meta">
                                                <i className="fa fa-calendar" /> 04/26/2019
                            </div>
                                            <div className="bloglist-excerpt">
                                                <p>Click here for the 50 greatest romantic comedies of all time… #hopelessromantic</p>
                                                <a href="https://www.rollingstone.com/movies/movie-lists/50-greatest-romantic-comedies-of-all-time-790068/crazy-rich-asians-2018-792254/" target="_blank" className="btn btn-main btn-effect">rom-coms</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End of row */}
                        </div>
                    </section>
                    {/* =============== END OF LATEST NEWS SECTION =============== */}
                    {/* =============== START OF SUBSCRIBE SECTION =============== */}
                    <section className="subscribe bg-light2 ptb100">
                        <div className="container">
                            {/* Start of row */}
                            <div className="row justify-content-center">
                                <div className="col-md-7 text-center">
                                    <h2 className="title">Join MovieMate Now!</h2>
                                    <h6 className="subtitle">Enter your email to receive information about upcoming releases and recommendations.</h6>
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
                                            <p className="nomargin">A place to create movie watchlists and favorites, for simple sharing with your mates!</p>
                                        </div>
                                    </div>
                                    {/* End of Widget 1 */}
                                    {/* Start of Widget 2 */}
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="widget widget-links">
                                            <h4 className="widget-title">Useful Links</h4>
                                            <ul className="general-listing">
                                                <li><a href="#">About MovieMate</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                {/* <li><a href="#">forum</a></li> */}
                                                {/* <li><a href="#">My Account</a></li> */}
                                                <li><a href="#">Watch List</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End of Widget 2 */}
                                    {/* Start of Widget 3 */}
                                    {/* <div class="col-lg-3 col-md-6 col-sm-12">
                                  <div class="widget widget-blog">
                                      <h4 class="widget-title">Latest News</h4>
      
                                      <ul class="blog-posts">
                                          <li><a href="#">blog post 1</a><small>januar 13, 2018</small></li>
                                          <li><a href="#">blog post 2</a><small>januar 13, 2018</small></li>
                                          <li><a href="#">blog post 3</a><small>januar 13, 2018</small></li>
                                      </ul>
                                  </div>
                              </div> */}
                                    {/* End of Widget 3 */}
                                    {/* Start of Widget 4 */}
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <div className="widget widget-social">
                                            <h4 className="widget-title">Follow Us</h4>
                                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ducimus, atque.</p> */}
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
                                            <div className="copyright ml-auto">All Rights Reserved by <a href="#">MovieMate</a>.</div>
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
        );
    }
};

export default Home;