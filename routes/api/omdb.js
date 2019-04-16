const router = require("express").Router();
const omdbController = require("../../controllers/omdbController");

// Matches with "/api/omdb"
router.route("/").post(omdbController.findAll);

router.route("/id").post(omdbController.findById);

module.exports = router;
