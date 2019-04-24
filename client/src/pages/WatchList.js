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
        selectValue: ''
    }

    componentDidMount() {
        this.getResults();
        this.getInitialState();
    }

    getResults = () => {
        API.getWatchList(1).then(res => {
            console.log(res);
            this.setState({ results: res.data })
        })
    }
    getInitialState = () => {
        this.setState({ selectValue: "current watchlist" })
    }
    handleChange = e => {
        this.setState({ selectValue: e.target.value });
    }
    removeWatchItem = (id) => {

        const filtered = this.state.results.filter(res => res.id != id);
        this.setState({ results: filtered });
        API.deleteWatchListItem(id).then(res => {
            console.log(res);
        })
    }

    recommend = (id) => {


        let data = {
            recommend: 1
        }
        API.recommendUpdate(id, data).then(res => {
            this.getResults()
        });

    }

    removeRec = (id) => {


        let data = {
            recommend: 0
        }

        API.recommendUpdate(id, data).then(res => {
            this.getResults()
        });
    }

    render() {
        return (
            <div>
                <Nav />
                <Header
                    title="Watch List"
                />
                <Wrapper>
                    <div className="row mb50">
                        <div className="col-md-6" />
                        <div className="col-md-6">
                            {/* Sort by */}
                            <div className="sort-by mr-4 mb-3">
                                <div className="sort-by-select">
                                    <select onChange={this.handleChange} value={this.state.selectValue} className="chosen-select-no-single">
                                        <option value="current watchlist">Current Watchlist</option>
                                        <option value="recommendations">Recommendations</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.selectValue === "current watchlist" ?
                        this.state.results.map(res => {
                            return (
                                <div>

                                    <WatchListItem
                                        title={res.title}
                                        plot={res.synopsis ? res.synopsis : "no data"}
                                        image={res.image}
                                        rec={res.recommend}
                                        recommend={() => this.recommend(res.id)}
                                        removeRec={() => this.removeRec(res.id)}
                                        removeFromList={() => this.removeWatchItem(res.id)}
                                    />
                                </div>
                            )
                        }) : this.state.results.map(res => {
                            if (res.recommend) {
                                return (
                                    <div>
                                        <WatchListItem
                                            title={res.title}
                                            plot={res.synopsis ? res.synopsis : "no data"}
                                            image={res.image}
                                            rec={res.recommend}
                                            recommend={() => this.recommend(res.id)}
                                            removeRec={() => this.removeRec(res.id)}
                                            removeFromList={() => this.removeWatchItem(res.id)}
                                        />
                                    </div>

                                )
                            }

                    }) }

                </Wrapper>

                <Footer />
            </div>
        )
    }
}

export default WatchList;