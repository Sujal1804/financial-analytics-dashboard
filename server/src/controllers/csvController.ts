import { Request, Response } from 'express';
import Transaction from '../models/Transaction';
import { generateCSV } from '../utils/csvGenerator';
import path from 'path';

export const exportCSV = async (req: Request, res: Response) => {
  try {
    console.log('CSV export request body:', req.body);
    const { columns, ...filters } = req.body;
    
    // Provide default columns if none are provided
    const selectedColumns: string[] = Array.isArray(columns) && columns.length > 0 
      ? columns 
      : ['date', 'amount', 'category', 'description', 'status'];
    
    console.log('Selected columns:', selectedColumns);
    console.log('Selected columns type:', typeof selectedColumns);
    console.log('Selected columns is array:', Array.isArray(selectedColumns));
    
    const query: any = {};
    if (filters.category) query.category = filters.category;
    if (filters.status) query.status = filters.status;
    if (filters.user_id) query.user_id = filters.user_id;
    if (filters.date) query.date = { $gte: new Date(filters.date as string) };
    if (filters.amount) query.amount = Number(filters.amount);
    
    // Use selectedColumns directly since we know it's an array
    const columnsToSelect = selectedColumns.join(' ');
    console.log('Columns to select for query:', columnsToSelect);
    
    let transactions = await Transaction.find(query).select(columnsToSelect);
    console.log('Raw transactions from DB:', transactions.length);
    
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
    console.log('Final selectedColumns before CSV generation:', selectedColumns);
    
    // Ensure we have valid data and columns before generating CSV
    if (!Array.isArray(transactions) || !Array.isArray(selectedColumns)) {
      throw new Error('Invalid data format for CSV generation');
    }
    
    const fileName = `transactions_${Date.now()}.csv`;
    console.log('About to call generateCSV with:', { 
      transactionsLength: transactions.length, 
      selectedColumns, 
      selectedColumnsType: typeof selectedColumns,
      fileName 
    });
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