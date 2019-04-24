import React from "react";
import "./style.css";
import RecommendBtn from "../RecommendBtn";
import RemoveWatchListBtn from "../RemoveWatchListBtn";
import RemoveRecBtn from "../RemoveRecBtn";
function WatchListItem(props) {
    return (
        <div>
            {/* Movie List Item */}
            <div className="col-md-12 col-sm-12">
                <div className="movie-list-1 mb30">
                    <div className="listing-container">
                        {/* Movie List Image */}
                        <div className="listing-image">
                            <img src={props.image} alt />
                        </div>
                        {/* Movie List Content */}
                        <div className="listing-content">
                            <div className="inner">
                                <h2 className="title">{props.title}</h2>
                                <p>{props.plot}</p>
                                {props.rec === false ? <RecommendBtn  onClick={props.recommend} /> : <RemoveRecBtn onClick={props.removeRec} />}
                                <RemoveWatchListBtn onClick={props.removeFromList} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default WatchListItem;