import React from "react";
import "./style.css";

function Header(props) {
    return (
        <div>
            {/* =============== START OF PAGE HEADER =============== */}
            <section className="page-header overlay-gradient mt-4" style={{ background: 'url(assets/images/posters/movie-collection.jpg)' }}>
                <div className="container">
                    <div className="inner">
                        <h2 className="title">{props.title}</h2>
                        {/* <ol class="breadcrumb"> */}
                        {/* <li><a href="index.html">Home</a></li> */}
                        {/* </ol> */}
                    </div>
                </div>
            </section>
            {/* =============== END OF PAGE HEADER =============== */}
        </div>
    )
};

export default Header;
