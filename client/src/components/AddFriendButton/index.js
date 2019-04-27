import React from "react";
import "./style.css";

function AddFriendButton(props) {
    return (
        <button onClick = {props.onClick} className="btn btn-main btn-effect m-2">
        Add Friend
        </button>
     )
};

export default AddFriendButton;