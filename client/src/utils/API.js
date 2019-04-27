import axios from "axios";


export default {
    search: function (query) {
        return axios.get("/api/omdb/" + query);
    },
    saveMovie: function (movieData) {
        return axios.post("/api/watchlist", movieData);
    },
    getWatchList: function (id) {
        return axios.get("/api/watchlist/" + id);
    },
    deleteWatchListItem: function (id) {
        return axios.delete("/api/watchlist/" + id);
    },
    getRecommendations: function (id) {
        return axios.get("/api/watchlist/recommend/" + id)
    },
    recommendUpdate: function (id, data) {
        return axios.put("/api/watchlist/recommend/" + id, data);
    },
    getFriends: function (id) {
        return axios.get("/api/friends/" + id);
    },
    removeFriend: function (data) {
        console.log(data)
        return axios.delete("/api/friends/remove", data);
    },
    addFriend: function (data) {
        return axios.post("/api/friends/create", data);
    },
    searchForFriend: function (email) {
        return axios.get("/api/users/" + email);
    },
    getUserCookie: function () {
        return axios.get("/api/friends/cookie");
    },
    login: function(email, password) {
        return axios.post("/api/users/auth/" + email, password)
    },
    signUp: function(data) {
        return axios.post("api/users", data)
    }

}