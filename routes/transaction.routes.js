import express from "express";
import { validateUser } from "../middlewares/validateUser.js";
import { getTransaction, transact, updateTransactionStatus } from "../controllers/transaction.controllers.js";
import { adminCheck } from "../middlewares/user.status.js";

const router = express.Router();

router.post("/userTransact", validateUser, transact)
router.get("/getTransact/:username", validateUser, getTransaction)
router.patch("/updateTransact/:id", validateUser, adminCheck, updateTransactionStatus)
export default router;