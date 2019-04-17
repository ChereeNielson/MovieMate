const router = require("express").Router();
const friendsController = require("../../controllers/friendsController");

// Matches with "/api/friends"

router.route("/:id").get(friendsController.findById);

module.exports = router;
