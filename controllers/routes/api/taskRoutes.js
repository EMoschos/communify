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
        console.log("Update with id")
        console.log(dbModel)
        res.json(dbModel)
        }
      )
      .catch(err => res.status(422).json(err));
  })
  .delete(function (req, res) {
    console.log(req.params.id)
    console.log("delete task with id")
    db.Task.deleteOne({ _id: req.params.id })
      .then(dbModel => {
        console.log("inside delete one")
        console.log(dbModel)
        res.json(dbModel)
        }
      )
      .catch(err => res.status(422).json(err));
  })
  
  router
  .route("/resign/:id")
  .put(function (req, res) {
    console.log(req.body)
    db.Task.findOneAndUpdate({ _id: req.params.id }, { $set: { completedBy: "" }}, { new: true })
      .then(dbModel => {
        console.log("Update with remove of user")
        console.log(dbModel)
        res.json(dbModel)
        }
      )
      .catch(err => res.status(422).json(err));
  })


module.exports = router;