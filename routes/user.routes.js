import express from "express";
import { allUsers, loginUser, logout, registerUser, validate } from "../controllers/user.controllers.js";
import { validateUser } from "../middlewares/validateUser.js";
import { adminCheck } from "../middlewares/user.status.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/allUsers", validateUser, adminCheck, allUsers)
router.get("/validate", validateUser, validate)
router.post("/logout", validateUser, logout)
export default router;