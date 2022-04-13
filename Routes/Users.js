import express from "express";
const router = express.Router();
import {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
  editUser,
} from "../Controllers/Users.js";
router.get("/", getUsers);

router.post("/", addUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

router.patch("/:id", editUser);
export default router;
