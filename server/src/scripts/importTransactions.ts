import mongoose from 'mongoose';
import Transaction from '../models/Transaction';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

console.log('typeof path:', typeof path); // Debug log

const MONGO_URI = process.env.MONGO_URI || '';
// Correct path to project root data folder
const jsonPath = path.join(__dirname, '../../../data/transactions.json');

async function importTransactions() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    const fileContent = fs.readFileSync(jsonPath, 'utf8');
    const transactions = JSON.parse(fileContent);

    if (!Array.isArray(transactions)) {
      throw new Error('transactions.json must be an array of objects');
    }

    // Optional: Clear existing transactions
    await Transaction.deleteMany({});
    console.log('Cleared existing transactions');

    await Transaction.insertMany(transactions);
    console.log(`Imported ${transactions.length} transactions!`);
  } catch (err) {
    console.error('Error importing transactions:', err);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}

importTransactions(); 