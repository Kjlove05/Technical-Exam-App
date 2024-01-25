const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../../middlewares/generateToken");
const User = require("../../models/User");



// Register
const registerUser = expressAsyncHandler(async (req, res) => {
  const {email, firstname, lastname, password} = req?.body;

  const userExists = await User.findOne({ email });
  if (userExists) throw new Error("User already exists");
      
  try { 
    const user = await User.create({ email,  firstname, lastname, password,  success: true});
    res.status(200).json(user);
  } catch (error) {
    res.json(error);
};
});

//fetch of users

const fetchUsers = expressAsyncHandler(async (req, res) => {

  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {}
})

//login

const loginUser = expressAsyncHandler(async (req, res) => {
  const {email, password} = req?.body;
  //find the user by email
  const userFound = await User.findOne({email});

  //check if the password match
  if (userFound && (await userFound?.isPasswordMatch(password))){
    res.json({
      _id: userFound?._id,
      firstname: userFound?.firstname,
      lastname: userFound?.lastname,
      email: userFound?.email,
      isAdmin: userFound?.isAdmin,
      token: generateToken(userFound?._id)
    })
  } else{
  res.status(401);
  throw new Error('Invalid Login Credentials');
  }
})

const updateUser = expressAsyncHandler(async(req, res) => {
  const {id} = req?.params;
  const {password, firstname ,email, lastname} = req.body;
  try {
    const user = await User.findByIdAndUpdate(id,{
      password, firstname ,email, lastname
    },{new: true});
    res.json(user)
  } catch (err) {
    res.json(err);
  }
})

const deleteUser = async (req, res) => {
  const {id} = req?.params;
  
  try {
    const user = await User.findByIdAndDelete(id);
    res.json(user);
  }
  catch (err) {
    res.json(err);
}
}

module.exports = {registerUser,fetchUsers, loginUser,updateUser, deleteUser};