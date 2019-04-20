import React from "react";
import "./style.css";

function Profile() {
    return (
        <div>
            <div className="col-md-4 col-12">
                <div className="celeb-img">
                    <img src="assets/images/celebrities/celebrity2a.jpg" alt />
                </div>
            </div>
            <div className="col-md-8 col-12">
                <div className="celeb-details">
                    <h3 className="title">Cheree Nielson</h3>
                    <span className="profession">Front End</span>
                    {/* tab links */}
                    <ul className="nav tab-links">
                        <li className="nav-item">
                            <a className="nav-link active" id="bio-tab" data-toggle="tab" href="#bio" aria-controls="bio" aria-expanded="false">biography</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="film-tab" data-toggle="tab" href="#filmography" aria-controls="filmography" aria-expanded="false">filmography</a>
                        </li>
                    </ul>
                    {/* Tab Content */}
                    <div className="tab-content mt70">
                        <div className="tab-pane fade active show" id="bio" role="tabpanel" aria-labelledby="bio-tab" aria-expanded="false">
                            <div className="bio-description">
                                <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Cras suscipit, quam vitae adipiscing faucibus, risus nibh laoreet odio, a porttitor metus eros ut enim. Morbi augue velit, tempus mattis dignissim nec, porta sed risus. Donec eget magna eu lorem tristique pellentesque eget eu dui. Fusce lacinia tempor malesuada. Ut lacus sapien, placerat a ornare nec, elementum sit amet felis. Maecenas pretium lorem hendrerit eros sagittis fermentum.</p>
                                <p>Phasellus enim magna, varius et commodo ut, ultricies vitae velit. Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel justo. In libero urna, venenatis sit amet ornare non, suscipit nec risus. Sed consequat justo non mauris pretium at tempor justo sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer vitae ante enim. Fusce sed elit est. Suspendisse sit amet mauris in quam pretium faucibus et aliquam odio.</p>
                            </div>
                            <div className="bio-details">
                                <ul className="bio-wrapper">
                                    <li><h6>Date of Birth:</h6> 04.26.1976</li>
                                    <li><h6>Gender:</h6> Female</li>
                                    <li><h6>State:</h6> Utah</li>
                                    <li><h6>Country:</h6> USA</li>
                                </ul>
                            </div>
                            <div className="clearfix" />
                        </div>
                        <div className="tab-pane fade" id="filmography" role="tabpanel" aria-labelledby="film-tab" aria-expanded="false">
                            <ul className="film-list">
                                <li><a href="#">Black Cage</a><span className="year">2017</span></li>
                                <li><a href="#">Find Me </a><span className="year">2016</span></li>
                                <li><a href="#">The 19th Life</a><span className="year">2016</span></li>
                                <li><a href="#">Central Hit </a><span className="year">2016</span></li>
                                <li><a href="#">Triple 7 </a><span className="year">2015</span></li>
                                <li><a href="#">Need for Space </a><span className="year">2014</span></li>
                                <li><a href="#">Breaking Mad </a><span className="year">2008-2013</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;