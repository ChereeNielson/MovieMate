import axios from "axios";


export default {
    search: function (query) {
        return axios.get("/api/omdb/"+ query);
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