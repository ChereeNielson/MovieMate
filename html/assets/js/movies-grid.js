
        var movieData = {
            "Title": "Game of Thrones",
            "Plot": "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SX300.jpg",
            }

        var movieCard = `<div class="col-lg-4 col-md-6 col-sm-12">
        <div class="friend-grid-1">
            <div class="friend-container">

                <!-- Celebrity Image -->
                <div class="friend-image">
                    <a href="friend-detail.html">
                        <img src="${movieData.Poster}" alt="">
                    </a>
                </div>

                <!-- Celebrity Content -->
                <div class="friend-content">
                    <div class="inner">
                        <h3 class="title">${movieData.Title}</h3>

                        <p>${movieData.Plot}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>`
        

    $("#movieResults").append(movieCard)