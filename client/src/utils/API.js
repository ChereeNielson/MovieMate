import axios from "axios";
const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = "c2eaffce";


export default {
    search: function(query){
        return axios.get(BASEURL + query +  "&apikey=" + APIKEY);
    },
    saveMovie: function(movieData) {
        return axios.post("/api/watchlist", movieData);
      },
    recommendUpdate: function(id) {
        return axios.put("/api/recommend/" + id)
    },
    getWatchList: function(id) {
        return axios.get("/api/watchlist/" + id)
    },
    deleteWatchListItem: function(id) {
        return axios.delete("/api/watchlist/" + id)
    }

}