const express = require('express');
const {
  registerUser,
  fetchUsers,
  loginUser,
  updateUser,
  deleteUser
} = require("../../controllers/users/usersController");
const userRoute = express.Router();

userRoute.post("/register",registerUser);
userRoute.get("/",fetchUsers);
userRoute.post("/login",loginUser);
userRoute.put("/:id",updateUser);
userRoute.delete("/:id",deleteUser);

module.exports = userRoute;