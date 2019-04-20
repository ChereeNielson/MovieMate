import axios from "axios";
const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = "c2eaffce";


export default {
    search: function (query) {
        return axios.get(BASEURL + query + "&apikey=" + APIKEY);
    },
    saveMovie: function (movieData) {
        return axios.post("/api/watchlist", movieData);
    },
    getWatchList: function (id) {
        return axios.get("/api/watchlist/" + id)
    },
    deleteWatchListItem: function (id) {
        return axios.delete("/api/watchlist/" + id)
    },
    recommendUpdate: function (id, data) {
        return axios.put("/api/watchlist/recommend/" + id, data)
    },

}