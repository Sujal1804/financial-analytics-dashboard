import { Request, Response } from 'express';
import Transaction from '../models/Transaction';

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, sort = 'date', order = 'desc', search = '', ...filters } = req.query;
    const query: any = {};
    // Filtering
    if (filters.category) query.category = filters.category;
    if (filters.status) query.status = filters.status;
    if (filters.user_id) query.user_id = filters.user_id;
    if (filters.date) query.date = { $gte: new Date(filters.date as string) };
    if (filters.amount) query.amount = Number(filters.amount);
    // Search
    if (search) {
      query.$or = [
        { category: { $regex: search, $options: 'i' } },
        { status: { $regex: search, $options: 'i' } },
        { user_id: { $regex: search, $options: 'i' } },
      ];
    }
    const transactions = await Transaction.find(query)
      .sort({ [sort as string]: order === 'asc' ? 1 : -1 })
      .skip((+page - 1) * +limit)
      .limit(+limit);
    const total = await Transaction.countDocuments(query);
    res.json({ data: transactions, total });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transaction) {
      res.status(404).json({ message: 'Transaction not found' });
      return;
    }
    res.json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      res.status(404).json({ message: 'Transaction not found' });
      return;
    }
    res.json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}; 