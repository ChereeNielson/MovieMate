// dynamic movie card
var movieCard =
`<div class="col-md-12 col-sm-12">
    <div class="movie-list-1 mb30">
        <div class="listing-container">
            <div class="listing-image">
                <img src="${this.image}" alt="">
            </div>
            <div class="listing-content">
                <div class="inner">
                    <h2 class="title">${this.title}</h2>
                    <p>${this.synopsis}</p>
                    <button id="recommend" class="btn btn-main btn-effect">recommend</button>
                    <button id="removerec" class="btn btn-main btn-effect">remove recommendation</button>
                    <button id="removewatch" class="btn btn-main btn-effect">remove from watchlist</button>
                </div>
            </div>
        </div>
    </div>
</div>`;

// loading the watch list on the page
loadWatchList()

// recommend a movie
$("#recommend").on("click", function() {
    recommend()
});

// remove movie recommendation
$("#removerec").on("click", function() {
    removeRecommendation()
});

// remove the movie from your watch list
$("removewatch").on("click", function() {
    removeFromWatchList()
});

function loadWatchList() {
    $.ajax("api/WatchList", {
        type: "GET",
    }).then(

    )
}

function removeFromWatchList() {
    $.ajax("api/WatchList", {
        type: "DELETE",
    }).then(

    )
}

function recommend() {
    $.ajax("api/recommendation", {
        type: "PUT",
    }).then(

    )
}

function removeRecommendation() {
    $.ajax("api/recommendation", {
        type: "DELETE",
    }).then(

    )
}

