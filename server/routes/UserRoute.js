const express = require('express');
const router = express.Router();
const { createUserController, getAllUsersController,getSingleUserController
    ,updateUserController,deletedUserController
 } = require("../controllers/UserController");

router.post("/post-user", createUserController);
router.get("/getAll-user", getAllUsersController);
router.get("/single-user/:id", getSingleUserController);
router.patch("/updated-user/:id", updateUserController);
router.delete("/delete-user/:id", deletedUserController);

module.exports = router;
