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
    usersFriends: [],
    friends: true,
    search: "",
    userSearchedSomeone: false,
    isAuthenticated: false,
    UserId: "",
    added: false
  };

  componentDidMount() {
    let data = sessionStorage.getItem("userID");
    if (data != null) {
      this.setState({ isAuthenticated: true });
      this.setState({ UserId: data });
    }
    this.loadFriends(data);
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

  loadFriends = id => {
    API.getFriends(id).then(res => {
      console.log(res);
      this.setState({ usersFriends: res.data });
    });
  };

  searchFriends = email => {
    API.searchForFriend(email).then(res => {
      this.state.usersFriends.map(user => {
        if (user.Followee.id === res.data.id) {
          this.setState({ added: true });
        }
      });
      console.log(res);
      this.setState({
        results: res.data
      });
      this.setState({
        userSearchedSomeone: true
      });
      console.log("results state" + this.state.usersFriends);
    });
  };

  unfriend = id => {
    alert("Friend Removed");
    let data = {
        FollowedId: id,
        UserId: this.state.UserId
    }
    API.removeFriend(data).then(res => {
      console.log(res);
      this.loadFriends()
    });
  };

  addFriend = id => {
    const newFriend = {
      UserId: this.state.UserId,
      FollowedId: id
    };
    alert("New Friend Added");
    API.addFriend(newFriend).then(res => {
      this.loadFriends();
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <Header title="My Friends" />
        <Wrapper>
          <FriendsSearchBar
            name="search"
            value={this.state.search}
            onChange={this.handleInputChange}
            onClick={this.handleFormSubmit}
          />
          <div>
              {this.state.userSearchedSomeone === false ? "" :
            this.state.added === false ?
              <FriendsListItem
                bio={this.state.results.bio}
                image={this.state.results.profileImg}
                name= {this.state.results.firstName + this.state.results.lastName}
                
                addFriend={()=>this.addFriend(this.state.results.id)}
                friends={true}
              />
             : 
              <FriendsListItem
                bio={this.state.results.bio}
                image={this.state.results.profileImg}
                name={
                  this.state.results.firstName + this.state.results.lastName
                }
                unfriend={()=>this.unfriend(this.state.results.id)}
                friends={false}
              />
            
            }
            {/* {
                    this.state.usersFriends.map(res => {
                        if(res.Followee.firstName === this.state.results.firstName) {
                            return (
                            <FriendsListItem 
                                bio = {this.state.results.bio}
                                image = {this.state.results.profileImg}
                                name = {this.state.results.firstName + this.state.results.lastName}
                                unfriend = {this.unfriend}
                                friends = {true}
                            />
                            )
                        } else {
                            return (
                            <FriendsListItem 
                                bio = {this.state.results.bio}
                                image = {this.state.results.profileImg}
                                name = {this.state.results.firstName + this.state.results.lastName}
                                addFriend = {this.addFriend}
                                friends = {false}
                            />
                            )
                        }
                    })  
                    } */}

            {this.state.usersFriends.map(friendData => {
              console.log(friendData);
              const friend = friendData.Followee;
              // console.log(friend)
              return (
                <FriendsListItem
                  bio={friend.bio}
                  image={friend.profileImg}
                  name={friend.firstName + friend.lastName}
                  friend={true}
                  unfriend={() => this.unfriend(friendData.FollowedId)}
                />
                // return (
                //     <FriendsListItem
                //     bio = {friend.bio}
                //     image = {friend.profileImg}
                //     name = {friend.firstName + friend.lastName}
                //     friend ={friendData.friend}
                //     addFriend = {() => this.addFriend(friend.id)}
                // />
                //     )
              );
            })}
          </div>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default FriendsList;
