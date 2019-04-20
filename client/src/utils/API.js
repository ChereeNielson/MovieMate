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
}