const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { generateToken, validateToken } = require("../middleware");

const Users = require("./userModel");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/register", (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 4);
  Users.findByUsername(user.username).then((foundUser) => {
    if (foundUser) {
      res.status(401).json({ message: "Username already exists" });
    } else {
      Users.insert(user)
        .then((newUser) => {
          const token = generateToken(newUser);
          delete newUser.password;
          res
            .status(201)
            .json({ message: "Registration Successful", token, user: newUser });
        })
        .catch((err) => {
          res
            .status(500)
            .json({ message: "Unable to register user", error: err.message });
        });
    }
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  !username || !password
    ? res.status(403).json({ message: "Please provide username and password" })
    : Users.findByUsername(username)
        .then((user) => {
          if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            delete user.password;
            res.status(200).json({ message: "Login Successful", token, user });
          }
        })
        .catch((err) => {
          res
            .status(500)
            .json({ message: "Unable to login user", error: err.message });
        });
});

module.exports = router;
