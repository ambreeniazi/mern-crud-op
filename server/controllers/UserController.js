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

module.exports = {
  createUserController,
};
