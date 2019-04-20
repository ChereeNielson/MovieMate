import React, { Component } from "react";
import "./style.css";
import AddWatchListBtn from "../AddWatchListBtn";
import RemoveWatchListBtn from "../RemoveWatchListBtn";
import RecommendBtn from "../RecommendBtn";
import RemoveRecBtn from "../RemoveRecBtn";

function SearchResult(props) {
    return (
        <div>
            <div class="col-md-12 col-sm-12 text-center">

                <div class="movie-container">
                    <div class="movie-image">
                        <img src={props.poster} alt="" />
                    </div>
                    {/* <div class="movie-content"> */}
                    {/* <div class="inner"> */}
                    <h3 class="title">{props.title}</h3>
                    <p>{props.plot}</p>
                    {/* <AddWatchListBtn onClick = {props.add}/>
                    <RemoveWatchListBtn onClick = {props.removeWatch} />
                    <RecommendBtn onClick = {props.recommend}/>
                    <RemoveRecBtn  onClick = {props.removeRec}/> */}
                </div>
            </div>
        </div>
    )
};

export default SearchResult;