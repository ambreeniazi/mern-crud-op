const User = require('../models/Users');

const createUserController = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = await User.create({ name, email, phone });
    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });

  } catch (error) {
    console.error(" Error while creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

const getAllUsersController = async (req , res)=>{
  try {
    const users = await User.find()
    res.status(201).json({
      message: "Users fetched successfully",
      users,
    })
  } catch (error) {
    console.error(" Error while getting user:", error);
    res.status(500).json({ message: "Failed to fetched user" });
  }
};
const getSingleUserController = async (req , res)=>{
  try {
    const userid = req.params.id;
    const user = await User.findById(userid);
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      message: "Single User fetched successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}  

const  updateUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user, });
  } catch (error) {
    res.send("Failed to updated this user");
  }
};
const  deletedUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json({
      msg: "User deleted successfully",
      user
    });
  } catch (error) {
    res.send("failed");
  }
};

module.exports = {
  createUserController,
  getAllUsersController,
  getSingleUserController,
  updateUserController,
  deletedUserController
};
