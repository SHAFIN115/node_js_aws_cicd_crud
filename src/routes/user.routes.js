const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth.middleware");


const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.post("/", protect, createUser);
router.get("/", protect, getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);


module.exports = router;