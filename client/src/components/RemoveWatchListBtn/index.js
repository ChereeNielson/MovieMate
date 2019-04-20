import React from 'react';
import "./style.css";

function RemoveWatchListBtn(props){
    return (
        <button onClick = {props.onClick} className="btn btn-main btn-effect m-2">remove from watchlist</button>
    )
};

export default RemoveWatchListBtn;