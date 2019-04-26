import React, { Component } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import WatchListItem from "../components/WatchListItem";
import RecommendedItem from "../components/RecommendedItem";
import API from "../utils/API";
class WatchList extends Component {
    state = {
        results: [],
        selectValue: '',
        friendData: [],
        userID: "",
        isAuthenticated: false
    }

    componentDidMount() {
        let data = sessionStorage.getItem('userID');
        this.getResults(data);
        this.getRecommendations(data);
        this.getInitialState();
        this.setState({userID: data})
    }
    getRecommendations = (id) => {
        API.getRecommendations(id).then(res => {
            this.setState({ friendData: res.data })
        })
    }
    getResults = (id) => {
        API.getWatchList(id).then(res => {
            this.setState({ results: res.data })
        })
    }
    getInitialState = () => {
        this.setState({ selectValue: "current watchlist" })
    }
    handleChange = e => {
        this.setState({ selectValue: e.target.value });
    }
    addToWatchList = () => {

        API.saveMovie({
            UserId: this.state.userID,
            imdbId: this.state.results.imdbID,
            image: this.state.results.Poster,
            synopsis: this.state.results.Plot,
            title: this.state.results.Title,
            recommend: false,
        }).then(res =>
            this.setState({ dataId: res.data.id }),
            this.setState({ added: true })

        )
            .catch(err => console.log(err))

    }
    removeWatchItem = (id) => {

        API.deleteWatchListItem(id).then(res => {
            this.getResults(this.state.userID);
        })
    }

    recommend = (id) => {


        let data = {
            recommend: 1
        }
        API.recommendUpdate(id, data).then(res => {
            this.getResults(this.state.userID)
        });

    }

    removeRec = (id) => {


        let data = {
            recommend: 0
        }

        API.recommendUpdate(id, data).then(res => {
            this.getResults(this.state.userID)
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
                        }) : this.state.friendData.map(res => {
                                return (
                                    <div>
                                        <RecommendedItem
                                            title={res.title}
                                            name={res.User.firstName + " " + res.User.lastName}
                                            image={res.image}
                                        />
                                    </div>
                                )
                            }
                        )}
                </Wrapper>
                <Footer />
            </div>
        )
    }
}

export default WatchList;