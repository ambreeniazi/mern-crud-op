const express = require('express');
const router = express.Router();
const { createUserController, getAllUsersController } = require("../controllers/UserController");

router.post("/post-user", createUserController);
router.get("/getAll-user", getAllUsersController);

module.exports = router;
