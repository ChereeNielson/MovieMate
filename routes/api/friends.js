const router = require("express").Router();
const friendsController = require("../../controllers/friendsController");

// Matches with "/api/friends"
router.route("/create").post(friendsController.create);

router
  .route("/cookie")
  .get(function(req, res){
    console.log(req.session)
    res.send(req.session)
  })
//Matches with "/api/friends/:id"
router
  .route("/:id")
  .get(friendsController.findById)
  .post(friendsController.create)
  .delete(friendsController.remove);


module.exports = router;
