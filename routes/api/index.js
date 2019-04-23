const router = require("express").Router();
const userRoutes = require("./users");
const omdbRoutes = require("./omdb");
const friendsRoutes = require("./friends");
const watchlistRoutes = require("./watchlist");

// routes
router.use("/omdb", omdbRoutes);
router.use("/users", userRoutes);
router.use("/friends", friendsRoutes);
router.use("/watchlist", watchlistRoutes)
module.exports = router;
