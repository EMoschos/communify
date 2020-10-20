const router = require("express").Router();
const isAuth = require("../../passport/middleware/isAuthenticated");
const db = require("../../../models");

// Matches with "/api/task/create" and creates new task
router
  .route("/create")
  .post(isAuth, function (req, res) {
    db.Task.create(req.body)
      .then((dbTask) => res.json(dbTask))
      .catch(err => {
        res.status(422).json(err)
        console.log(err)
      });
  });

// Matches with "/api/task/" and gets all tasks
router
  .route("/")
  .get((req, res) => {
    db.Task.find({})
      .then(dbTask => {
        console.log("Task GET route")
        res.json(dbTask)
      })
      .catch(err => res.status(422).json(err));
  })

  router
  .route("/:id")
  .get(function (req, res) {
    db.Task.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })
  .put(function (req, res) {
    console.log(req.body)
    db.Task.findOneAndUpdate({ _id: req.params.id }, { $set: { completedBy: req.user.email }}, { new: true })
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
        }
      )
      .catch(err => res.status(422).json(err));
  })
  


module.exports = router;