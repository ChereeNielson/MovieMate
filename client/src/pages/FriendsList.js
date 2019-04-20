import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import FriendsListItem from "../components/FriendsListItem";

class FriendsList extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Header
                    title="My Friends"
                />
                <Wrapper>
                    <FriendsListItem 
                    bio = "TESTINGTESTINGTESTING"
                    image = "https://i.ebayimg.com/images/g/vfsAAOSwcLxYDELn/s-l300.jpg"
                    name = "JD"
                    favoriteMovie = "Cant think of one right now"
                    celebrityCrush = "Morgan Freeman"
                    favoriteTreat = "popcorn or something"

                    />
                </Wrapper>
                <Footer />
            </div>
        )
    }
}
export default FriendsList;