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
                            {/* <div className="play-btn">
                                <a href="https://www.youtube.com/watch?v=Q0CbN8sfihY" className="play-video">
                                    <i className="fa fa-play" />
                                </a>
                            </div> */}
                            {/* Buttons */}
                            {/* <div className="buttons">
                                <a href="#" data-original-title="Rate" data-toggle="tooltip" data-placement="bottom">
                                    <i className="icon-heart" />
                                </a>
                                <a href="#" data-original-title="Share" data-toggle="tooltip" data-placement="bottom">
                                    <i className="icon-share" />
                                </a>
                            </div> */}
                            {/* Rating */}
                            {/* <div className="stars">
                                <div className="rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star-o" />
                                </div>
                            </div> */}
                            {/* Image */}
                            <img src={props.poster}  alt="" />
                        </div>
                        {/* Movie List Content */}
                        <div className="listing-content">
                            <div className="inner">
                                <h2 className="title">{props.title}</h2>
                                <p>{props.plot}</p>
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