const router = require("express").Router();
const friendsController = require("../../controllers/friendsController");

// Matches with "/api/friends"
router.route("/create").post(friendsController.create);

//Matches with "/api/friends/:id"
router
  .route("/:id")
  .get(friendsController.findById)
  .post(friendsController.create)
  .delete(friendsController.remove);

module.exports = router;
