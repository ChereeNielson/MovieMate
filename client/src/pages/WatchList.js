import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import WatchListItem from "../components/WatchListItem";
import RemoveWatchListBtn from "../components/RemoveWatchListBtn";
import RecommendBtn from "../components/RecommendBtn";
import RemoveRecBtn from "../components/RemoveRecBtn";
class WatchList extends Component {
    state = {
        recommended: false,
        added: true
    }

    removeWatchItem = () => {
        alert("REMOVED")
        this.setState({ added: false })
    }

    recommend = () => {
        alert("RECOMMENDED")
        this.setState({ recommended: true })
    }

    removeRec = () => {
        alert("REMOVED")
        this.setState({ recommended: false })
    }

    render() {
        return (
            <div>
                <Nav />
                <Header
                    title="Watch List"
                />
                <Wrapper>
                    <WatchListItem>
                        <RemoveWatchListBtn onClick = {this.removeWatchItem}/>
                        <RecommendBtn onClick={this.recommend} />
                    </WatchListItem>
                </Wrapper>

                <Footer />
            </div>
        )
    }
}

export default WatchList;