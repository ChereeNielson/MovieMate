<!-- https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346 -->
<!-- https://facebook.github.io/create-react-app/docs/folder-structure -->
<!-- https://reactjs.org/docs/faq-structure.html -->

```
app
├── config/
│   └── routes.js
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── Icon.js
│   │   ├── UserDetail.js
│   │   ├── UserList.js
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   │   ├── Header.test.js
│   │   │   └── HeaderNav/
│   │   │       ├── HeaderNav.js
│   │   │       ├── HeaderNav.css
│   │   │       └── HeaderNav.test.js
│   │   ├── UserLogin/
│   │   │   ├── UserLogin.js
│   │   │   └── UserLogin.css
│   │   ├── Profile/
│   │   │   ├── Profile.js
│   │   │   └── Profile.css
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── Home.css
│   │   ├── Search/
│   │   │   ├── Search.js
│   │   │   └── Search.css
│   │   ├── Friends/
│   │   │   ├── Friends.js
│   │   │   └── Friends.css
│   │   ├── Recommendations/
│   │   │   ├── Recommendations.js
│   │   │   └── Recommendations.css
│   │   ├── Watchlist/
│   │   │   ├── Watchlist.js
│   │   │   └── Watchlist.css
│   │   ├── Playlists/
│   │   │   ├── Playlists.js
│   │   │   └── Playlists.css
│   │   └── Footer/
│   │       ├── Footer.js
│   │       └── Footer.css
│   ├── containers/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── HomePage.js
│   │   ├── registerServiceWorker.js
│   │   ├── UserDetailPage.js
│   │   └── UserListPage.js
│   ├── images/
│   │   └── logo.svg
│   ├── index.js
│   ├── index.css
│   └── utils
│       └── testUtils.js
├── api/
│   ├── APIUtils.js
│   ├── APIUtils.test.js
│   ├── ProfileAPI.js
│   └── UserAPI.js
├── controllers/
│   ├── moviesController.js
│   └── friendsController.js
├── routes/
│   ├── indexRoutes.js
│   └── api/
│       ├── friendsAPI.js
│       ├── recommendationsAPI.js
│       ├── watchlistAPI.js
│       ├── playlistsAPI.js
│       └── indexAPI.js
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── images/  
├── README.md
├── .gitignore
├── node_modules/
├── package-lock.json
├── package.json
└── index.js
```
