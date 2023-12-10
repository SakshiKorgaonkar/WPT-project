const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../schema/user");
const verifyToken = require("../middleware");
require("dotenv").config();

const router = express.Router();


mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error: "));
db.once("open", () => {
  console.log("Database is connected.");
});

router.post("/register", async (req, res) => {
  try {
    if (req.body.password === req.body.confirmPassword) {
      const existingUser = await User.findOne({ email: req.body.email });

      if (!existingUser) {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          name: req.body.name,
          phone: req.body.phone,
          email: req.body.email,
          password: hashPassword,
        });

        const savedUser = await newUser.save();

        res.status(201).json({
          message: "User Registered Successfully.",
          userData: savedUser,
        });
      } else {
        res.json({
          message: "You are Already Registered.",
        });
      }
    } else {
      res.json({
        message: "Password Not Matched! (Please enter the same password.)",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error Occurred, Can't register user.",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (passwordMatch) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "30d", // Token expires in 30 days
        });

        res.json({
          success: "Bravo! Password and email matched :>",
          message: "You are logged in",
          token: token,
        });
      } else {
        res.json({
          message: "Password Do Not Match! But User Exists.",
        });
      }
    } else {
      res.json({
        message: "User does not exist. Please Sign Up first",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Some Error Occurred",
    });
  }
});


router.get("", verifyToken, (req, res) => {
  // The user is authenticated, and req.userId contains the user ID
  res.json({ message: "This is a protected route." });
});

module.exports = router;
