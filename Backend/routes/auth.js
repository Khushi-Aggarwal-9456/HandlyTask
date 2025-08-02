const express = require("express"); // getting express
const router = express.Router(); // getting router from express.Router()
const User = require("../models/UserModel"); // fetching User from UserModel
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const FetchUser = require("../middleware/FetchUser");

const JWT_SIGN = "handlytask"; // this is the JWT SIGN, use to generate Token of logged user

// endpoint to create user using POST request and endpoint "/tasky/auth/createuser", no login required
router.post(
  "/createuser",
  [
    body("email", "enter a valid email").isEmail(), // validation for email field
    body("password", "enter password size bigger than 5 characters").isLength({
      min: 5,
    }), // validation for password field,
    body("role", "enter role size atleats 1 characters").isLength({
      min: 1,
    }), // validation for password field,

  ],
  async (req, res) => {
    const error = validationResult(req); // getting errors from validationResult
    if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
    // returning status 400, with json message for errors received from errors array

    // check whether the user with email exists
    try {
      let user = await User.findOne({ email: req.body.email });
      let success = false;

      if (user) {
        success = false
        return res
          .status(400)
          .json({ success, message: "User with this email already exists" });
      }

      var salt = await bcrypt.genSalt(10); // this is the salt 
      var securePassword = await bcrypt.hash(req.body.password, salt); // creating a secure password, using hash function of bcrypt and passing the plain password and genaredt salt

      user = await User.create({ // creating an new user
        // creting an User
        email: req.body.email,
        password: securePassword,
        role: req.body.role
      });

      const data = { // data object consisting of newly created user, whose id receiving from database
        user: {
          id: user.id
        }
      };

      const authToken = jwt.sign(data, JWT_SIGN); // generating the token, to pass reather the whole user
      success = true;
      res.status(200).json({ success, authToken, message: "User created successfully" }); // sending the user,when it created successfully
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// endpoint to login user using POST request and endpoint "/tasky/auth/login", no login required

router.post("/loginuser", [
  body("email", "enter a valid email").isEmail(),
  body("password", "password length should be grater than 5").isLength({ min: 5 })
], async (req, res) => {
  const error = validationResult(req); // getting errors from validationResult
  if (!error.isEmpty()) return res.status(400).json({ error: error.array() });
  // returning status 400, with json message for errors received from errors array

  try {

    const { email, password } = req.body; // destructuring user's email and password from req.body

    let success = false;

    const user = await User.findOne({ email });
    if (!user) {
      success = false;
      res.status(400).json({ success, message: "Login with correct credintials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password); // comparing the stored user's password and entred user password
    if (!passwordCompare) {
      success = false;
      res.status(400).json({ success, message: "Login with correct credintials" });
    }

    const data = { // data object consisting of newly created user, whose id receiving from database
      user: {
        id: user.id
      }
    };

    const authToken = jwt.sign(data, JWT_SIGN); // generating the token, to pass reather the whole user

    success = true;

    res.status(200).json({ user, success, authToken, message: "User found successfully" }); // sending the authToken, when it found successfully

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// endpoint to get logedin user details using POST request and endpoint "/tasky/auth/getuser", login required

router.post("/getuser", FetchUser, async (req, res) => {
  try {
    const userID = req.user.id; // fetching the userID from req.user.id
    console.log("in getUser: " + userID);

    const user = await User.findById(userID).select("-password"); // fetching the user details except the password

    if (!user) {
      res.status(400).json({ message: "Login with correct credintials" });
    }
    res.status(200).json({
      user, "message": "User found successfully"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// endpoint to update loggedin user using PUT request and endpoint "/tasky/auth/updateuser", login required

router.put("/updateuser/:id", [
  body("password", "password length should be grater than 5").isLength({ min: 5 }),
  body("role", "role  shold have atleats one character").isLength({ min: 1 })
], FetchUser, async (req, res) => {
  try {
    const userID = req.params.id; // fetching the userID from req.user.id
    console.log("in getUser: " + userID);

    const user = await User.findById(req.params.id).select("-password"); // fetching the user details except the password

    if (!user) {
      res.status(400).json({ message: "Login with correct credintials" });
    }

    var salt = await bcrypt.genSalt(10); // this is the salt 
    var securePassword = await bcrypt.hash(req.body.password, salt); // creating a secure password, using hash function of bcrypt and passing the plain password and genaredt salt

    await User.findByIdAndUpdate(userID, {
      password: securePassword,
      role: req.body.role
    });

    res.status(200).json({
      "message": "User updated successfully"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// endpoint to delete user using DELETE request and endpoint "/tasky/auth/deleteuser", login required

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const userID = req.params.id; // fetching the userID from req.user.id
    console.log("in getUser: " + userID);

    const user = await User.findById(userID).select("-password"); // fetching the user details except the password

    if (!user) {
      res.status(400).json({ message: "Login with correct credintials" });
    }

    await User.findByIdAndDelete(userID);

    res.status(200).json({
      "message": "User deleted successfully"
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// endpoint to delete user using DELETE request and endpoint "/tasky/auth/getallusers", login required

router.post("/getallusers", async (req, res) => {
  try{
    const users = await User.find();
    res.status(200).send({ users });
  }catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router; // exporting the router variable to parent component 
