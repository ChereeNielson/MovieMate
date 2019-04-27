import React from "react";
import "./style.css";
import RemoveFriendButton from '../RemoveFriendButton/index';
import AddFriendButton from '../AddFriendButton/index';

function FriendsListItem(props) {
    return (
        <div>
            <div className="col-md-12 col-sm-12">
                <div className="celebrity-list-1">
                    <div className="celeb-container">
                        <div className="celebrity-image">
                            <a href="celebrity-detail.html">
                                <img src={props.image} alt />
                            </a>
                        </div>
                        <div className="celebrity-content">
                            <div className="inner">
                                <h3 className="title"><a href="celebrity-detail.html">{props.name}</a></h3>
                                <p>{props.bio}</p>
                                <br />
                               {props.friends === true ? <AddFriendButton onClick = {props.addFriend} />: <RemoveFriendButton onClick = {props.unfriend} /> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FriendsListItem;