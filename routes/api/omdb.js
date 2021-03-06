const router = require("express").Router();
const omdbController = require("../../controllers/omdbController");

// Matches with "/api/omdb"
router.route("/:search").get(omdbController.findAll);

router.route("/id").get(omdbController.findById);

module.exports = router;
