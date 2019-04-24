import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import FriendsListItem from "../components/FriendsListItem";
import FriendsSearchBar from "../components/FriendsSearchBar";
import API from "../utils/API";

class FriendsList extends Component {

    state = {
        results: [],
        friends: true
    }

    componentDidMount() {
        this.loadFriends();
    }

    loadFriends = () => {
        API.getFriends().then(res => {
            console.log(res);
            this.setState({ results: res.data })
        })
    }

    // searchFriends = query => {
    //     API.searchForFriend(query)
    //     .then(res => {

    //     })
    // }

    unfriend = (id) => {
        alert("Friend Removed")
        const filtered = this.state.results.filter(res => res.id != id);
        this.setState({ results: filtered });
        API.removeFriend(id).then(res => {
            console.log(res);
        })
    }

    addFriend = (id) => {
        alert("New Friend Added")

        API.addFriend(id).then(res => {
            this.loadFriends()
        })
    }



    render() {
        return (
            <div>
                <Nav />
                <Header
                    title="My Friends"
                />
                <Wrapper>
                    <FriendsSearchBar />
                    <FriendsListItem 
                    // bio = "TESTINGTESTINGTESTING"
                    // image = "https://i.ebayimg.com/images/g/vfsAAOSwcLxYDELn/s-l300.jpg"
                    // name = "JD"
                    // favoriteMovie = "Cant think of one right now"
                    // celebrityCrush = "Morgan Freeman"
                    // favoriteTreat = "popcorn or something"

                    />
                </Wrapper>
                <Footer />
            </div>
        )
    }
}
export default FriendsList;