const router = require("express").Router();
const watchlistController = require("../../controllers/watchlistController");

// Matches with "/api/watchlist"
router.route("/").post(watchlistController.create);

//Matches with "/api/watchlist/:id"
router
  .route("/:id")
  .get(watchlistController.findByUserId)
  .delete(watchlistController.remove);


//Matches with "/api/watchlist/recommend/:id"
router
  .route("/recommend/:id")
  .get(watchlistController.recommend)
  .put(watchlistController.update);

//Matches with "/api/watchlist/"

module.exports = router;
