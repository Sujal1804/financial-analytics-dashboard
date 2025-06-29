# Financial Analytics Dashboard

A full-stack financial analytics dashboard built with React, Node.js, Express, and MongoDB. This application provides comprehensive financial data visualization, transaction management, and CSV export capabilities.

## 🚀 Features

### Frontend (React + TypeScript)
- **Modern Dark Theme UI** - Beautiful, responsive dashboard design
- **Real-time Data Visualization** - Interactive charts and graphs
- **Transaction Management** - Full CRUD operations for financial transactions
- **Advanced Filtering & Search** - Multi-field filters with real-time search
- **CSV Export** - Export filtered data to CSV format
- **Responsive Design** - Works on desktop, tablet, and mobile devices

### Backend (Node.js + Express + TypeScript)
- **RESTful API** - Complete API for transaction management
- **MongoDB Integration** - Robust database with Mongoose ODM
- **CSV Generation** - Server-side CSV export functionality
- **Authentication System** - User authentication and authorization
- **Data Validation** - Input validation and error handling

### Data Visualization
- **Summary Metrics** - Key financial indicators and KPIs
- **Revenue vs Expenses Chart** - Monthly comparison charts
- **Category Breakdown** - Pie charts for expense categorization
- **Transaction Table** - Sortable, filterable data table

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Material-UI (MUI)** - Component library
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MongoDB Atlas** account (or local MongoDB)
- **Git**

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd looprai
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### 3. Configure Environment Variables

Edit the `.env` file in the server directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Frontend Setup

```bash
# Navigate to client directory
cd ../client

# Install dependencies
npm install
```

### 5. Start the Application

#### Start Backend (Terminal 1)
```bash
cd server
npm run dev
```

#### Start Frontend (Terminal 2)
```bash
cd client
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📊 Data Import

### Import Sample Data

The application includes a sample dataset with 300 financial transactions. To import the data:

```bash
cd server
npm run seed
```

This will populate your MongoDB database with sample transaction data.

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Transactions
- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create new transaction
- `PUT /api/transactions/:id` - Update transaction
- `DELETE /api/transactions/:id` - Delete transaction

### CSV Export
- `POST /api/csv/export` - Export transactions to CSV

## 🎨 Features in Detail

### Dashboard Overview
- **Total Revenue**: Sum of all revenue transactions
- **Total Expenses**: Sum of all expense transactions
- **Net Profit**: Revenue minus expenses
- **Transaction Count**: Total number of transactions

### Transaction Management
- **Add Transactions**: Create new financial records
- **Edit Transactions**: Modify existing transaction details
- **Delete Transactions**: Remove unwanted records
- **Bulk Operations**: Select multiple transactions for operations

### Advanced Filtering
- **Date Range**: Filter by transaction dates
- **Category**: Filter by revenue/expense categories
- **Status**: Filter by payment status (Paid/Pending)
- **Amount Range**: Filter by transaction amounts
- **Search**: Real-time text search across all fields

### Data Export
- **CSV Export**: Download filtered data as CSV files
- **Column Selection**: Choose which fields to include in export
- **Custom Filenames**: Automatic timestamp-based naming

## 🐛 Troubleshooting

### Common Issues

#### MongoDB Connection Error
```
MongoDB connection error: Could not connect to any servers in your MongoDB Atlas cluster
```
**Solution**: 
1. Check your IP whitelist in MongoDB Atlas
2. Verify your connection string in `.env`
3. Ensure your MongoDB cluster is running

#### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution**:
```bash
# Find and kill the process using port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

#### CSV Export Error
```
TypeError: Cannot read properties of undefined (reading 'join')
```
**Solution**: This is a known issue with the CSV generator. The backend includes defensive checks to handle this.

### Development Commands

```bash
# Backend
cd server
npm run dev          # Start development server
npm run build        # Build for production
npm run seed         # Import sample data

# Frontend
cd client
npm start            # Start development server
npm run build        # Build for production
npm test             # Run tests
```

## 📁 Project Structure

```
looprai/
├── client/                 # React frontend
│   ├── public/            # Static files
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   ├── utils/         # Utility functions
│   │   └── config/        # Configuration files
│   └── package.json
├── data/                   # Sample data
│   └── transactions.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Material-UI** for the beautiful component library
- **Recharts** for the data visualization capabilities
- **MongoDB Atlas** for the cloud database service

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Review the console logs for error messages
3. Ensure all dependencies are properly installed
4. Verify your environment variables are correctly set

---

**Happy Coding! 🚀** 