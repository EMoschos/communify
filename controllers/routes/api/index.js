const router = require("express").Router();
const userRoutes = require("./userRoutes");

// User routes
router.use("/user", userRoutes);

module.exports = router;
