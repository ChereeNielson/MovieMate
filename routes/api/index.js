const router = require("express").Router();
const userRoutes = require("./users");
const omdbRoutes = require("./omdb");
const friendsRoutes = require("./friends");

// routes
router.use("/omdb", omdbRoutes);
router.use("/users", userRoutes);
router.use("/friends", friendsRoutes);
module.exports = router;
