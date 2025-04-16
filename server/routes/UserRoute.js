const express = require('express');
const router = express.Router();
const { createUserController, getAllUsersController,getSingleUserController
    ,updateUserController
 } = require("../controllers/UserController");

router.post("/post-user", createUserController);
router.get("/getAll-user", getAllUsersController);
router.get("/single-user/:id", getSingleUserController);
router.patch("/updated-user/:id", updateUserController);

module.exports = router;
