import express from 'express';
import { getTransactions } from '../controller/transaction/getTransaction.mjs';
import { postTransaction } from '../controller/transaction/postTransaction.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';
;

const router = express.Router();

router.post('/transactions', authMiddleware, postTransaction);
router.get('/transactions', getTransactions);

export default router;
