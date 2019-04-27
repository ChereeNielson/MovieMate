import React, { Component } from 'react';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Script from 'react-load-script'


class Home extends Component {
    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }

    render() {
        return (
            <div>

              <Nav /> <br></br><br></br>
        {/* =============== START OF WRAPPER =============== */}
        <div className="wrapper">
          <section id="slider" className="full-slider">
            <div className="rev-slider-wrapper fullscreen-container overlay-gradient">
              <div id="fullscreen-slider" className="rev_slider fullscreenbanner" style={{display: 'none'}} data-version="5.4.1">
                <ul>
                  {/* ===== SLIDE NR. 1 ===== */}
                  <li data-transition="fade">
                    {/* MAIN IMAGE */}
                    <img src="assets/images/slider/slider1.jpg" alt="Image" title="slider-bg" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                    {/* LAYER NR. 1 */}
                    <div className="tp-caption tp-resizeme" data-x="center" data-hoffset data-y="middle" data-voffset="['-30','-30','-30','-30']" data-responsive_offset="on" data-fontsize="['60','50','40','30']" data-lineheight="['60','50','40','30']" data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{zIndex: 5, color: '#fff', fontWeight: 900}}>START WATCHING NOW
                    </div>
                  </li>
                  {/* ===== SLIDE NR. 2 ===== */}
                  <li data-transition="fade" data-slotamount={7} data-easein="default" data-easeout="default" data-masterspeed={2000}>
                    {/* MAIN IMAGE */}
                    <img src="assets/images/slider/slider2.jpg" alt="Image" title="slider-bg" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                    {/* LAYER NR. 1 */}
                    <div className="tp-caption tp-resizeme" data-x="center" data-hoffset data-y="middle" data-voffset="['-30','-30','-30','-30']" data-responsive_offset="on" data-fontsize="['60','50','40','30']" data-lineheight="['60','50','40','30']" data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{zIndex: 5, color: '#fff', fontWeight: 900}}>CONNECT WITH FRIENDS
                    </div>
                  </li>
                  {/* ===== SLIDE NR. 3 ===== */}
                  <li data-transition="fade" data-slotamount={7} data-easein="default" data-easeout="default" data-masterspeed={2000}>
                    {/* MAIN IMAGE */}
                    <img src="assets/images/slider/slider3.jpg" alt="Image" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={3} className="rev-slidebg" data-no-retina />
                    {/* LAYER NR. 1 */}
                    <div className="tp-caption tp-resizeme" data-x="center" data-hoffset data-y="middle" data-voffset="['-30','-30','-30','-30']" data-responsive_offset="on" data-fontsize="['60','50','40','30']" data-lineheight="['60','50','40','30']" data-whitespace="nowrap" data-frames="[{&quot;delay&quot;:1000,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" style={{zIndex: 5, color: '#fff', fontWeight: 900}}>SEARCH FOR FAVORITES
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* ===== END OF REV SLIDER WRAPPER ===== */}
            {/* ===== START OF SEARCH FORM WRAPPER ===== */}
            <div className="search-form-wrapper search-form-rev">
              <div className="container">
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
                  <h2 className="title">Featured Films</h2>
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
                      <img src="assets/images/posters/poster-1.jpg" alt='image' />
                    </div>
                    {/* End of Poster */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://www.imdb.com/title/tt2527338/" target="_blank" rel="noopener noreferrer" >Star Wars IX</a>
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
                        <i className="fa fa-star-half-o" />                                    
                      </div>
                      <span>9.5 / 10</span>
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
                      <img src="assets/images/posters/poster-2.jpg" alt="image" />
                    </div>
                    {/* End of Poster */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://www.imdb.com/title/tt5752360/" target="_blank" rel="noopener noreferrer"> The Female Brain</a>
                      </h4>
                      <span className="released">9 Feb 2018</span>
                    </div>
                    {/* End of Movie Details */}
                    {/* Start of Rating */}
                    <div className="stars">
                      <div className="rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <span>5.7 / 10</span>
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
                      <img src="assets/images/posters/poster-3.jpg" alt="image" />
                    </div>
                    {/* End of Poster */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://www.imdb.com/title/tt0120616/" target="_blank" rel="noopener noreferrer"> The Mummy</a>
                      </h4>
                      <span className="released">7 May 1999</span>
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
                      <span>7.0 / 10</span>
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
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://www.imdb.com/title/tt1867030/" target="_blank" rel="noopener noreferrer"> Parrot</a>
                      </h4>
                      <span className="released">28 July 2012</span>
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
                      <span>8.6 / 10</span>
                    </div>
                    {/* End of Rating */}
                  </div>
                  {/* End of Movie Box */}
                </div>
                {/* === End of Sliding Item 4 === */}
              </div>
              {/* End of Latest Movies Slider */}
            </div>
          </section>
          {/* =============== END OF LATEST MOVIES SECTION =============== */}
          {/* =============== START OF UPCOMING MOVIES SECTION =============== */}
          <section className="upcoming-movies parallax ptb100" data-background="assets/images/posters/movie-night.jpg" data-color="#3e4555" data-color-opacity="0.95">
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
                    {/* Start of Buttons to video*/}
                    <div className="buttons">
                      <a href="https://www.imdb.com/title/tt1979376/" target="_blank" rel="noopener noreferrer" className="play-vid">
                        <i className="fa fa-play" />
                      </a>
                    </div>
                    {/* End of Buttons */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a>Toy Story 4</a>
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
                  {/* Start of Upcoming ITEM 1 */}
                  <div className="movie-box-1 upcoming-item">
                    {/* Start of Poster */}
                    <div className="poster">
                      <img src="assets/images/movies/Aladdin.jpg" alt />
                    </div>
                    {/* End of Poster */}
                    {/* Start of Buttons */}
                    <div className="buttons">
                      <a href="https://www.imdb.com/title/tt6139732/" target="_blank" rel="noopener noreferrer" className="play-vid">
                        <i className="fa fa-play" />
                      </a>
                    </div>
                    {/* End of Buttons */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href>Aladdin</a>
                      </h4>
                      <span className="released">Release Date: 24 May 2019</span>
                    </div>
                    {/* End of Movie Details */}
                  </div>
                  {/* End of Upcoming Item 1 */}
                  {/* Start of Upcoming ITEM 2 */}
                  <div className="movie-box-1 upcoming-item mt20">
                    {/* Start of Poster */}
                    <div className="poster">
                      <img src="assets/images/movies/LionKing.jpg" alt />
                    </div>
                    {/* End of Poster */}
                    {/* Start of Buttons */}
                    <div className="buttons">
                      <a href="https://www.imdb.com/title/tt6105098/" target="_blank" rel="noopener noreferrer" className="play-vid">
                        <i className="fa fa-play" />
                      </a>
                    </div>
                    {/* End of Buttons */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href>The Lion King</a>
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
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://youtu.be/Q7ztHi9ejp4" target="_blank" rel="noopener noreferrer"> Glass</a>
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
                        <i className="fa fa-star-half-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <span>6.8 / 10</span>
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
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://youtu.be/0LHxvxdRnYc" target="_blank" rel="noopener noreferrer"> Captain Marvel</a>
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
                        <i className="fa fa-star-half-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <span>7.1 / 10</span>
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
                      <img src="assets/images/posters/PetSematary.jpg" alt />
                    </div>
                    {/* End of Poster */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://youtu.be/VllcgXSIJkE" target="_blank" rel="noopener noreferrer"> Pet Sematary</a>
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
                        <i className="fa fa-star-o" />
                        <i className="fa fa-star-o" />
                      </div>
                      <span>6.2 / 10</span>
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
                      <img src="assets/images/posters/Avengers.jpg" alt />
                    </div>
                    {/* End of Poster */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://youtu.be/TcMBFSGVi1c" target="_blank" rel="noopener noreferrer"> Avengers: Endgame</a>
                      </h4>
                      <span className="released">26 Apr 2019</span>
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
                      <span>9.3 / 10</span>
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
                      <img src="assets/images/posters/Shazam.png" alt />
                    </div>
                    {/* End of Poster */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://youtu.be/go6GEIrcvFY" target="_blank" rel="noopener noreferrer"> Shazam!</a>
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
                {/* === End of Sliding Item 5 === */}
                {/* === Start of Sliding Item 6 === */}
                <div className="item">
                  {/* Start of Movie Box */}
                  <div className="movie-box-1">
                    {/* Start of Poster */}
                    <div className="poster">
                      <img src="assets/images/posters/Dragon.jpg" alt />
                    </div>
                    {/* End of Poster */}
                    {/* Start of Movie Details */}
                    <div className="movie-details">
                      <h4 className="movie-title">
                        <a href="https://youtu.be/SkcucKDrbOI" target="_blank" rel="noopener noreferrer"> How to Train Your Dragon: The Hidden World</a>
                      </h4>
                      <span className="released">22 Feb 2019</span>
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
                      <span>7.7 / 10</span>
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
                  <h6 className="subtitle">We will show you step-by-step how to start watching your favorite movies with your favorite friends starting now!</h6>
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
                  <span className="timeline-step-btn" style={{color: '#2a7bc2', background: '#c1ddf5'}}>Step 2</span>
                  {/* Start of Timeline Image */}
                  <div className="col-md-6 col-sm-12 timeline-image-wrapper">
                    <div className="timeline-image">
                      <img src="assets/images/other/movie-night.jpg" alt height={400} width={400} />
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
                  <span className="timeline-step-btn" style={{color: '#eb305f', background: '#f9c8d4'}}>Step 3</span>
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
                      <img src="assets/images/other/life-is-too-short.jpg" alt />
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
                  <h6 className="subtitle" />
                </div>
              </div>
              {/* End of row */}
              {/* Start of row */}
              <div className="row mt50">
                {/* 1st Blog Item */}
                <div className="col-md-4">
                  <div className="bloglist-post-holder shadow-hover">
                    {/* Blog Post Thumbnail */}
                    <a href="https://www.marvel.com/movies" target="_blank" rel="noopener noreferrer" className="bloglist-thumb-link hover-link">
                      <div className="bloglist-post-thumbnail" style={{background: 'url(assets/images/blog/Marvel.jpg)'}} />
                    </a>
                    {/* Blog Post Text Wrapper */}
                    <div className="bloglist-text-wrapper">
                      <h4 className="bloglist-title">
                        <a href="blog-post-detail.html">Marvel Movies</a>
                      </h4>
                      <div className="bloglist-meta">
                        <i className="fa fa-calendar" /> 01/01/2019
                      </div>
                      <div className="bloglist-excerpt">
                        <p>The time is now! Click here to get all caught up on the Marvel madness.</p>
                        <a href="https://www.marvel.com/movies" target="_blank" rel="noopener noreferrer" className="btn btn-main btn-effect">marvel</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd Blog Item */}
                <div className="col-md-4">
                  <div className="bloglist-post-holder shadow-hover">
                    {/* Blog Post Thumbnail */}
                    <a href="https://www.oscars.org/oscars" target="_blank" rel="noopener noreferrer" className="bloglist-thumb-link hover-link">
                      <div className="bloglist-post-thumbnail" style={{background: 'url(assets/images/blog/Oscars2019.jpg)'}} />
                    </a>
                    {/* Blog Post Text Wrapper */}
                    <div className="bloglist-text-wrapper">
                      <h4 className="bloglist-title">
                        <a href="blog-post-detail.html">Oscar Awards</a>
                      </h4>
                      <div className="bloglist-meta">
                        <i className="fa fa-calendar" /> 02/24/2019
                      </div>
                      <div className="bloglist-excerpt">
                        <p>Click here to access the official page for the 2019 Oscars!</p>
                        <a href="https://www.oscars.org/oscars" target="_blank" rel="noopener noreferrer" className="btn btn-main btn-effect">oscars</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3rd Blog Item */}
                <div className="col-md-4">
                  <div className="bloglist-post-holder shadow-hover">
                    {/* Blog Post Thumbnail */}
                    <a href="https://www.rollingstone.com/movies/movie-lists/50-greatest-romantic-comedies-of-all-time-790068/crazy-rich-asians-2018-792254/" target="_blank" rel="noopener noreferrer" className="bloglist-thumb-link hover-link">
                      <div className="bloglist-post-thumbnail" style={{background: 'url(assets/images/blog/90sRomComs.jpg)'}} />
                    </a>
                    {/* Blog Post Text Wrapper */}
                    <div className="bloglist-text-wrapper">
                      <h4 className="bloglist-title">
                        <a href="blog-post-detail.html">50 Greatest Rom-Coms</a>
                      </h4>
                      <div className="bloglist-meta">
                        <i className="fa fa-calendar" /> 04/26/2019
                      </div>
                      <div className="bloglist-excerpt">
                        <p>Click here for the 50 greatest romantic comedies of all time… #hopelessromantic</p>
                        <a href="https://www.rollingstone.com/movies/movie-lists/50-greatest-romantic-comedies-of-all-time-790068/crazy-rich-asians-2018-792254/" target="_blank" rel="noopener noreferrer" className="btn btn-main btn-effect">rom-coms</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of row */}
            </div>
          </section>
          {/* =============== END OF LATEST NEWS SECTION =============== */}
        </div>
        <Footer />
      </div>
        );
    }
};

export default Home;