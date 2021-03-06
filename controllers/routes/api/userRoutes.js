const router = require("express").Router();
const passport = require("../../passport/passport")
const db = require("../../../models")

// Matches with "/api/user"
router
  .route("/signup")
  .post(function (req, res) {
    db.User.create(req.body)
      .then(() => res.redirect(307, "/api/user/login"))
      .catch(err => console.log(err));
  });

// Matches with "/api/user/login"
router
  .route("/login")
  .post(passport.authenticate("local"), (req, res) => {
    console.log("LOGIN")
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

// Matches with "/api/user/logout"
router
  .route("/logout")
  .get((req, res) => {
    console.log("LOGOUT")
    // req.session.destroy(function () {
    //   // res.clearCookie('connect.sid');
    //   res.redirect('/'); //Inside a callback… bulletproof!
    // });
    req.logout();
    res.redirect("/");
  });

// Matches with "/api/user/getUser"
router
  .route("/getUser")
  .get((req, res) => {
    console.log(req.user)
    res.send(req.user)
  });

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(function (req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  })
  .put(function (req, res) {
    console.log(req.body)
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(

        // setTimeout(()=>{db.User.findById(req.params.id)
        //   .then(dbModel => {
        //     console.log("inside findone" + dbModel)
        //     req.login(dbModel, function (err) {
        //           if (err) return next(err)
        //           console.log("After relogin: " + req.session.passport.user)
        //         })
        //     res.json(dbModel)})
        //   .catch(err => res.status(422).json(err))}, 1000)
        dbModel => {
          req.login(dbModel, function (err) {
            if (err) return next(err)
            console.log("After relogin: " + req.session.passport.user)
            res.json(dbModel)
          })
        }
      )
      .catch(err => res.status(422).json(err));
  })

module.exports = router;
