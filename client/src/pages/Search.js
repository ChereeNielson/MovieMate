import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Form from "../components/Form";
import SearchResult from "../components/SearchResults";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import AddWatchListBtn from "../components/AddWatchListBtn";
import RemoveRecBtn from "../components/RemoveRecBtn";
import RemoveWatchListBtn from "../components/RemoveWatchListBtn";
import RecommendBtn from "../components/RecommendBtn";
import API from "../utils/API";
class Search extends Component {
    state = {
        results: [],
        userData: [],
        search: "",
        recommended: false,
        added: false,
        dataId: "",
        userID: "",
        isAuthenticated: false
    }
    componentDidMount() {
        let data = sessionStorage.getItem('userID');
        if (data != 0) {
            this.setState({ isAuthenticated: true })
        }
        this.reset(data);
        this.setState({ userID: data })
    }

    reset = (id) => {
        this.getResults(id);
        this.setState({ added: false });
        this.setState({ recommended: false });
    }
    getResults = (id) => {
        API.getWatchList(id).then(res => {
            console.log(res.data)
            this.setState({ userData: res.data })

        })
    }

    search = query => {
        this.reset(this.state.userID);

        API.search(query)
            .then(res => {
                if (this.state.userData.length === 0) {
                    this.setState({ results: res.data })
                }
                this.state.userData.map(info => {
                    if (info.title === res.data.Title) {
                        this.setState({ results: res.data })
                        this.setState({ added: true })
                        this.setState({ results: res.data })
                        this.setState({ dataId: info.id })
                    }
                    else {
                        this.setState({ results: res.data })
                    }
                    if (info.title === res.data.Title && info.recommend === true) {
                        this.setState({ recommended: true })
                    }
                })

            })
            .catch(err => console.log(err));
    };
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
        this.getResults();
        console.log(this.state.userData);
        API.deleteWatchListItem(id).then(res => {

            this.setState({ added: false })
        })
    }


    recommend = (id) => {

        let data = {
            recommend: 1
        }
        API.recommendUpdate(id, data).then(res => {

            this.setState({ recommended: true })
        });

    }

    removeRec = (id) => {

        let data = {
            recommend: 0
        }

        API.recommendUpdate(id, data).then(res => {

            this.setState({ recommended: false })
        });
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
        this.search(this.state.search);
    };

    render() {
        return (
            <div>

                <Nav />
                <Wrapper>

                    <Header
                        title={this.state.results.Title ? "Your search results for: " + this.state.results.Title : "Search"}

                    />
                    <Form
                        onClick={this.handleFormSubmit}
                        onChange={this.handleInputChange}
                        value={this.state.search}
                        name="search"

                    />
                    {this.state.results.Title ? <SearchResult
                        title={this.state.results.Title}
                        poster={this.state.results.Poster}
                        plot={this.state.results.Plot}
                    /> : ""}
                    {!this.state.isAuthenticated ? "" :
                        this.state.results.Title ? <Wrapper>
                            {this.state.added === false ? <AddWatchListBtn onClick={this.addToWatchList} /> : <RemoveWatchListBtn onClick={() => this.removeWatchItem(this.state.dataId)} />}
                            {this.state.added === false ? "" : this.state.recommended === false ? <RecommendBtn onClick={() => this.recommend(this.state.dataId)} /> : <RemoveRecBtn onClick={() => this.removeRec(this.state.dataId)}
                            />}
                        </Wrapper> : ""}
                    <Footer />
                </Wrapper>
            </div>
        )
    }
}
export default Search;