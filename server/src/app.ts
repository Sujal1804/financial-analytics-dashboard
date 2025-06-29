import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import authRoutes from './routes/auth';
import transactionRoutes from './routes/transactions';
import csvRoutes from './routes/csv';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/csv', csvRoutes);

app.use(errorHandler);

export default app; 