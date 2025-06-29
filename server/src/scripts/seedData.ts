import mongoose from 'mongoose';
import Transaction from '../models/Transaction';
import * as dotenv from 'dotenv';

dotenv.config();

const sampleTransactions = [
  {
    date: new Date('2024-01-15'),
    amount: 1500.00,
    category: 'Salary',
    description: 'Monthly salary payment',
    status: 'completed',
    user_id: 'user123',
    user_profile: 'John Doe'
  },
  {
    date: new Date('2024-01-20'),
    amount: -250.00,
    category: 'Food',
    description: 'Grocery shopping',
    status: 'completed',
    user_id: 'user123',
    user_profile: 'John Doe'
  },
  {
    date: new Date('2024-01-22'),
    amount: -120.00,
    category: 'Transportation',
    description: 'Gas station',
    status: 'completed',
    user_id: 'user123',
    user_profile: 'John Doe'
  },
  {
    date: new Date('2024-01-25'),
    amount: -80.00,
    category: 'Entertainment',
    description: 'Movie tickets',
    status: 'completed',
    user_id: 'user123',
    user_profile: 'John Doe'
  },
  {
    date: new Date('2024-01-28'),
    amount: 500.00,
    category: 'Freelance',
    description: 'Web development project',
    status: 'completed',
    user_id: 'user123',
    user_profile: 'John Doe'
  }
];

const seedData = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI || '';
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Transaction.deleteMany({});
    console.log('Cleared existing transactions');

    // Insert sample data
    await Transaction.insertMany(sampleTransactions);
    console.log('Sample data inserted successfully');

    // Verify data
    const count = await Transaction.countDocuments();
    console.log(`Total transactions in database: ${count}`);

    mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData(); 