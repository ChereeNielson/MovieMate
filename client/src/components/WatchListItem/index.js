import React from "react";
import "./style.css";

function WatchListItem(props) {
    return (
        <div>
            {/* Movie List Item */}
            <div className="col-md-12 col-sm-12">
                <div className="movie-list-1 mb30">
                    <div className="listing-container">
                        {/* Movie List Image */}
                        <div className="listing-image">
                            {/* Play Button */}
                            <div className="play-btn">
                                <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                    <i className="fa fa-play" />
                                </a>
                            </div>
                            {/* Buttons */}
                            <div className="buttons">
                                <a href="#" data-original-title="Rate" data-toggle="tooltip" data-placement="bottom">
                                    <i className="icon-heart" />
                                </a>
                                <a href="#" data-original-title="Share" data-toggle="tooltip" data-placement="bottom">
                                    <i className="icon-share" />
                                </a>
                            </div>
                            {/* Rating */}
                            <div className="stars">
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                </div>
                            </div>
                            {/* Image */}
                            <img src="assets/images/posters/poster-1.jpg" alt />
                        </div>
                        {/* Movie List Content */}
                        <div className="listing-content">
                            <div className="inner">
                                <h2 className="title">Star Wars</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WatchListItem;