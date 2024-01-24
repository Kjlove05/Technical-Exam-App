const express = require('express');
const {
  registerUser,
  fetchUsers,
  loginUser
} = require("../../controllers/users/usersController");
const userRoute = express.Router();

userRoute.post("/register",registerUser);
userRoute.get("/",fetchUsers);
userRoute.post("/login",loginUser);

module.exports = userRoute;