
        var friendData = [{
            id: 1,
            firstName: "Jane",
            lastName: "Doe",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Michael_Jordan_crying.jpg/220px-Michael_Jordan_crying.jpg",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 2,
            firstName: "Hey",
            lastName: "Bro",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Michael_Jordan_crying.jpg/220px-Michael_Jordan_crying.jpg",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }]

        for (var i = 0; i < friendData.length; i++) {

        var friendCard = `<div class="col-md-12 col-sm-12">
        <div class="friend-list-1">
            <div class="friend-container">
    
                <div class="friend-image">
                        <img src="${friendData[i].image}" alt="">
                </div>
    
                <div class="friend-content">
                    <div class="inner">
                        <h3 class="title">${friendData[i].firstName} ${friendData[i].lastName}</h3>
    
                        <p>${friendData[i].bio}</p>
                    </div>
                </div>
    
            </div>
            </div>
        </div>`
        

        $("#friendList").append(friendCard)

        }