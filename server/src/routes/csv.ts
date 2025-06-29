import { Router } from 'express';
import { exportCSV } from '../controllers/csvController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.post('/export', authenticateJWT, exportCSV);

export default router; 