const router = require("express").Router();
const userRoutes = require("./users");
const omdbRoutes = require("./omdb");

// routes
router.use("/omdb", omdbRoutes);
router.use("/users", userRoutes);

module.exports = router;
