import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import WatchListItem from "../components/WatchListItem";
import RemoveWatchListBtn from "../components/RemoveWatchListBtn";
import RecommendBtn from "../components/RecommendBtn";
import RemoveRecBtn from "../components/RemoveRecBtn";
import API from "../utils/API";
class WatchList extends Component {
    state = {
        results: [],
        recommended: false,
        added: true
    }

    componentDidMount() {
        API.getWatchList(1).then(res => {
            console.log(res);
            this.setState({ results: res.data })
        })
    }
    removeWatchItem = (id) => {
        alert("REMOVED")
        const filtered = this.state.results.filter(res => res.id != id);
        this.setState({ results: filtered });
        API.deleteWatchListItem(id).then(res => {
            console.log(res);
        })
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
                    {this.state.results.map(res => {
                        return (
                            <div>
                                <WatchListItem
                                    title={res.title}
                                    plot={res.synopsis ? res.synopsis : "no data"}
                                    image={res.image}
                                    id={res.id}
                                    recommend={this.recommend}
                                    removeFromList={() => this.removeWatchItem(res.id)}
                                />
                            </div>
                        )
                    })}

                </Wrapper>

                <Footer />
            </div>
        )
    }
}

export default WatchList;