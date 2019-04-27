import React from "react";
import "./style.css";
function RecommendedItem(props) {
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
                                <p>Recommended by: {props.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RecommendedItem;