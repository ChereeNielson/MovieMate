const router = require("express").Router();
const watchlistController = require("../../controllers/watchlistController");

// Matches with "/api/watchlist"
router.route("/create").post(watchlistController.create);

//Matches with "/api/watchlist/:id"
router
  .route("/:id")
  .get(watchlistController.findAll)
  .delete(watchlistController.remove);

module.exports = router;
