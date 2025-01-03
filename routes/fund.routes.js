import express from 'express';
import { validateUser } from '../middlewares/validateUser.js';
import { addProfitAdmin, fundData, fundDataAdmin } from '../controllers/fund.controllers.js';
import { adminCheck } from '../middlewares/user.status.js';

const router = express.Router();

router.post("/fund", validateUser, fundData)
router.post("/fundAdmin/:id", validateUser, adminCheck, fundDataAdmin)
router.post("/Profits/:id", validateUser, adminCheck, addProfitAdmin)

export default router;