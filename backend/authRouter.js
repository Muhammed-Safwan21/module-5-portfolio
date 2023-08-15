const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const users = []; // Simulated database of users

router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password before storing it
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ message: "Error hashing password" });
    } else {
      users.push({
        username,
        email,
        password: hash,
      });
      console.log(users);
      res.json({ message: "Signup successful" });
    }
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user by username
  const user = users.find((user) => user.username === username);

  if (!user) {
    res.status(401).json({ message: "User not found" });
  } else {
    // Compare the provided password with the stored hashed password
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        res.status(401).json({ message: "Invalid credentials" });
      } else {
        // Generate and send a JWT token
        const token = jwt.sign(
          { userId: user.id },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "1h" }
        );
        res.json({ token });
      }
    });
  }
});

module.exports = router;
