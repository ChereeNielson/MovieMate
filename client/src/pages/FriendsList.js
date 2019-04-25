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
        friends: true,
        search: ""
    }

    componentDidMount() {
        this.loadFriends();
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchFriends(this.state.search);
    };

    loadFriends = (res) => {
        API.getFriends().then(res => {
            console.log(res);
            this.setState({ results: res.data} )
        })
    }

    searchFriends = email => {
        API.searchForFriend(email)
        .then(res => {
            console.log(res);
            this.setState({ results: res.data} )
        })
    }

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
                    <FriendsSearchBar name="search" 
                    value={this.state.search} 
                    onChange={this.handleInputChange} 
                    onClick={this.handleFormSubmit}/>
                    <div>
                    <FriendsListItem 
                    bio = {this.state.results.bio}
                    image = {this.state.results.profileImg}
                    name = {this.state.results.firstName + this.state.results.lastName}
                    // favoriteMovie = "Cant think of one right now"
                    // celebrityCrush = "Morgan Freeman"
                    // favoriteTreat = "popcorn or something"
                    />
                    </div>
                </Wrapper>
                <Footer />
            </div>
        )
    }
}
export default FriendsList;