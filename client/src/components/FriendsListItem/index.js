import React from "react";
import "./style.css";

function FriendsListItem(props) {
    return (
        <div>
            <div className="col-md-12 col-sm-12">
                <div className="celebrity-list-1">
                    <div className="celeb-container">
                        {/* Celebrity Image */}
                        <div className="celebrity-image">
                            <a href="celebrity-detail.html">
                                <img src={props.image} alt />
                            </a>
                        </div>
                        {/* Celebrity Content */}
                        <div className="celebrity-content">
                            <div className="inner">
                                <h3 className="title"><a href="celebrity-detail.html">{props.name}</a></h3>
                                <p>{props.bio ? props.bio : ""}<br />
                                    Favorite Movie: {props.favoriteMovie ? props.favoriteMovie: ""}<br />
                                    Celebrity Crush: {props.celebrityCrush ? props.celebrityCrush: ""}<br />
                                    Favorite Treat: {props.favoriteTreat ? props.favoriteTreat: ""}<br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FriendsListItem;