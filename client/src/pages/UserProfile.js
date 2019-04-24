import React, { Component } from "react";
import Nav from "../components/Nav";
import ProfileContainer from "../components/ProfileContainer";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

class UserProfile extends Component {

    render() {
        return (
            <div>
                <Nav />
                    <ProfileContainer>
                        <Profile />
                    </ProfileContainer>
                <Footer />

            </div>

        )
    }
};

export default UserProfile;