const express = require("express");
const router = express.Router();

// Load user model
const User = require("../../models/User");

// @route  GET api/users/test
// @desc   Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ message: "Users Works" }));

// @route  GET api/users/register
// @desc   register a user
// @access Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });
    }
  });
});

module.exports = router;
