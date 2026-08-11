const express = require("express");

const router = express.Router();

const authController = require("../controllers/authController");

// Signup
router.post("/signup", authController.signup);

// Login
router.post("/login", authController.login);

// Get All Users
router.get("/users", authController.getAllUsers);

// Delete User
router.delete("/users/:id", authController.deleteUser);

module.exports = router;