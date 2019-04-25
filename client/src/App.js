import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Search from './pages/Search';
import WatchList from "./pages/WatchList";
import FriendsList from "./pages/FriendsList";
import UserProfile from "./pages/UserProfile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/watchlist" component={WatchList} />
            <Route exact path="/friends" component={FriendsList} />
            <Route exact path="/user" component={UserProfile} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
