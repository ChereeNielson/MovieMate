import React from 'react';
import "./style.css";

function AddWatchListBtn(props){
    return (
        <button onClick = {props.onClick} className="btn btn-main btn-effect m-2">add to watchlist</button>
    )
};

export default AddWatchListBtn;