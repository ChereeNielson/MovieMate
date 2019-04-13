const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

  router.route("/auth/:email")
  .post(userController.auth);

// Matches with "/api/users/:email"
router
  .route("/:email")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;