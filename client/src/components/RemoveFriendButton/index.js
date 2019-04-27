import React from "react";
import "./style.css";

function RemoveFriendButton(props) {
    return (
       <button onClick = {props.onClick} className="btn btn-main btn-effect m-2">
       Unfriend
       </button>
    )
};

export default RemoveFriendButton;