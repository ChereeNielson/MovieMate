import axios from "axios";
const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = "4b3460ba";


export default {
    search: function (query) {
        return axios.get(BASEURL + query + "&apikey=" + APIKEY);
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
    recommendUpdate: function (id, data) {
        return axios.put("/api/watchlist/recommend/" + id, data);
    },
    getFriends: function (id) {
        return axios.get("/api/friends/" + id);
    },
    removeFriend: function (id) {
        return axios.delete("/api/friends/" + id);
    },
    addFriend: function (id) {
        return axios.put("/api/friends/" + id);
    },
    searchForFriend: function (email) {
        return axios.get("/api/users/" + email);
    },
    getUserCookie: function () {
        return axios.get("/api/friends/cookie");
    }

}