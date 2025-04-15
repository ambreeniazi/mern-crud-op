const express = require('express');
const router = express.Router();
const { createUserController } = require("../controllers/UserController");

router.post("/post-user", createUserController);

module.exports = router;
