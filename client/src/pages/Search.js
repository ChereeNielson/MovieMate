import React, { Component } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Form from "../components/Form";
import SearchResult from "../components/SearchResults";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import API from "../utils/API";
import AddWatchListBtn from "../components/AddWatchListBtn";
import RemoveRecBtn from "../components/RemoveRecBtn";
import RemoveWatchListBtn from "../components/RemoveWatchListBtn";
import RecommendBtn from "../components/RecommendBtn";
class Search extends Component {
    state = {
        results: [],
        search: "",
        recommended: false,
        added: false
    }
    search = query => {
        API.search(query)
            .then(res =>
                this.setState({ results: res.data })
            )
            .catch(err => console.log(err));
    };
    addToWatchList = () => {
        
        alert("ADDED")
        API.saveMovie({
            UserId: 1,
            imdbId: this.state.results.imdbID,
            image: this.state.results.Poster,
            synopsis: this.state.results.Plot,
            title: this.state.results.Title,
            recommend: false,
        }).then(res =>
            console.log(res)
        )
            .catch(err => console.log(err))

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
                        add={this.addToWatchList}
                        recommend={this.recommend}
                        removeRec={this.removeRec}
                        removeWatch={this.removeWatchItem}
                    /> : ""}
                    {this.state.results.Title ? <Wrapper>
                        {this.state.added === false ? <AddWatchListBtn onClick={this.addToWatchList} /> : <RemoveWatchListBtn onClick={this.removeWatchItem} />}
                        {this.state.recommended === false ? <RecommendBtn onClick={this.recommend} /> : <RemoveRecBtn onClick={this.removeRec} />}
                    </Wrapper> : ""}
                    <Footer />
                </Wrapper>
            </div>
        )
    }
}
export default Search;