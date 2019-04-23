import React from 'react';
import "./style.css";

function RemoveRecBtn(props) {
    return (
        <button onClick = {props.onClick} className="btn btn-main btn-effect m-2">remove recommendation</button>
    )
};

export default RemoveRecBtn;