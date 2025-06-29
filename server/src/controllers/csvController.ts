import { Request, Response } from 'express';
import Transaction from '../models/Transaction';
import { generateCSV } from '../utils/csvGenerator';
import path from 'path';

export const exportCSV = async (req: Request, res: Response) => {
  try {
    console.log('CSV export request body:', req.body);
    const { columns, ...filters } = req.body;
    
    // Provide default columns if none are provided
    const selectedColumns = Array.isArray(columns) && columns.length > 0 
      ? columns 
      : ['date', 'amount', 'category', 'description', 'status'];
    
    console.log('Selected columns:', selectedColumns);
    
    const query: any = {};
    if (filters.category) query.category = filters.category;
    if (filters.status) query.status = filters.status;
    if (filters.user_id) query.user_id = filters.user_id;
    if (filters.date) query.date = { $gte: new Date(filters.date as string) };
    if (filters.amount) query.amount = Number(filters.amount);
    
    let transactions = await Transaction.find(query).select(selectedColumns.join(' '));
    transactions = transactions.map((t: any) => {
      const flat: any = {};
      selectedColumns.forEach(col => {
        let value = t[col];
        if (typeof value === 'object' && value !== null) {
          value = JSON.stringify(value);
        }
        if (typeof value === 'undefined') {
          value = '';
        }
        flat[col] = value;
      });
      return flat;
    });
    console.log('Transactions to export:', transactions);
    const fileName = `transactions_${Date.now()}.csv`;
    const csvPath = await generateCSV(transactions, selectedColumns, fileName);
    res.download(csvPath, fileName, err => {
      if (err) {
        console.error('CSV download error:', err);
        res.status(500).json({ message: 'Error downloading file' });
      }
    });
  } catch (err) {
    console.error('CSV export error:', err);
    res.status(500).json({ message: 'Server error' });
  }
}; 