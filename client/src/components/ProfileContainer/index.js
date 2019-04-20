import React from "react";
import "./style.css";

function ProfileContainer(props) {
    return (
        <div>
            <section className="celeb-detail-intro overlay-gradient ptb100" style={{background: "url" + ("assets/images/other/actor-img.jpg")}}>
            </section>
            <section className="celeb-detail pb100">
                <div className="container">
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </section>
        </div>
    )
};

export default ProfileContainer;