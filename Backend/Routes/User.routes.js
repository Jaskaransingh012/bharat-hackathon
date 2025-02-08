const express = require('express');
const { registerUser, loginUser } = require('../controller/UserController');
const User = require('../Models/UserModel');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get("/user/:email", async (req, res) => {
    try {
      const email = req.params.email;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

module.exports = router;