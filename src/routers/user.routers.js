import express from "express";
const router = express.Router();
import {
  getAllUsers,
  getUserById,
  addNewUser,
  editUserById,
  deleteUserById,
  editUserByEmail,
  getUserByEmail,
  getUserByEmailPassword,
} from "../controllers/user.controllers.js";

router.get("/get-all-users", getAllUsers);
router.get("/get-user/:id", getUserById);
router.get("/get-user-email/:email", getUserByEmail);
router.get("/get-user-email-password/:email/:password", getUserByEmailPassword);
router.post("/add-user", addNewUser);
router.put("/edit-user/:id", editUserById);
router.delete("/delete-user/:id", deleteUserById);
router.put("/edit-user-email", editUserByEmail);


export default router;
