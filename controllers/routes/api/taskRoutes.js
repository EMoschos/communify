const router = require("express").Router();
const isAuth = require("../../passport/middleware/isAuthenticated");
const db = require("../../../models");

// Matches with "/api/task" and creates new task
router
  .route("/create")
  .post(isAuth, function (req, res) {
    db.Task.create(req.body)
      .then((dbTask) => res.json(dbTask))
      .catch(err => console.log(err));
  });


module.exports = router;