import { Router } from 'express';
import { getTransactions, createTransaction, updateTransaction, deleteTransaction } from '../controllers/transactionController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.get('/', authenticateJWT, getTransactions);
router.post('/', authenticateJWT, createTransaction);
router.put('/:id', authenticateJWT, updateTransaction);
router.delete('/:id', authenticateJWT, deleteTransaction);

export default router; 