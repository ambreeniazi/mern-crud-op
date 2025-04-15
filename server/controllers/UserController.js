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
    res.status(500).json({ message: "Failed to get user" });
  }
}

module.exports = {
  createUserController,
  getAllUsersController
};
