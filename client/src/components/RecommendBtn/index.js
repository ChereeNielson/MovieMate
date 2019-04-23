import React from "react";
import "./style.css";

function RecommendBtn(props){
    return (
        <button onClick = {props.onClick} id ={props.id} className="btn btn-main btn-effect m-2">recommend</button>
    )
};

export default RecommendBtn;