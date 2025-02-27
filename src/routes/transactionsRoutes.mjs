import express from 'express';
import { createTransaction, getTransactions } from '../controller/transaction.mjs';
import { authMiddleware } from '../middleware/authMiddleware.mjs';
;

const router = express.Router();

router.post('/transactions', authMiddleware, createTransaction);
router.get('/transactions', getTransactions);

export default router;
