# Postman Collection Guide for Financial Analytics Dashboard API

This guide explains how to use and share the Postman collection for the Financial Analytics Dashboard API.

## 📁 Files Included

1. **`Financial_Analytics_Dashboard_API.postman_collection.json`** - The complete Postman collection
2. **`POSTMAN_COLLECTION_GUIDE.md`** - This guide

## 🚀 How to Import the Collection

### Method 1: Import via Postman App
1. Open Postman
2. Click **"Import"** button (top left)
3. Drag and drop the `Financial_Analytics_Dashboard_API.postman_collection.json` file
4. Click **"Import"**

### Method 2: Import via Postman Web
1. Go to [postman.com](https://postman.com)
2. Sign in to your account
3. Click **"Import"** button
4. Upload the JSON file
5. Click **"Import"**

## ⚙️ Setup Environment Variables

After importing, you need to set up environment variables:

### 1. Create Environment
1. Click **"Environments"** in the left sidebar
2. Click **"Create Environment"**
3. Name it: `Financial Dashboard Local`

### 2. Add Variables
Add these variables to your environment:

| Variable Name | Initial Value | Description |
|---------------|---------------|-------------|
| `base_url` | `http://localhost:5000` | Your backend server URL |
| `auth_token` | (leave empty) | Will be set after login |
| `transaction_id` | (leave empty) | Will be set when testing specific transactions |

### 3. Select Environment
- Select your created environment from the dropdown in the top-right corner

## 🔐 Authentication Setup

### Step 1: Register a User
1. Go to **"Authentication"** folder
2. Run **"Register User"** request
3. Use the provided test data or modify as needed

### Step 2: Login and Get Token
1. Run **"Login User"** request
2. Copy the `token` from the response
3. Set the `auth_token` environment variable with this value

## 📋 How to Use the Collection

### 1. Authentication Endpoints
- **Register User**: Create new user account
- **Login User**: Get authentication token

### 2. Transaction Management
- **Get All Transactions**: Retrieve all transactions with pagination
- **Get Transaction by ID**: Get specific transaction
- **Create Transaction**: Add new transaction
- **Update Transaction**: Modify existing transaction
- **Delete Transaction**: Remove transaction
- **Filter Transactions**: Search and filter transactions

### 3. CSV Export
- **Export Transactions to CSV**: Download filtered data as CSV

### 4. Analytics
- **Get Summary Metrics**: Dashboard summary data
- **Get Revenue vs Expenses Chart Data**: Chart data
- **Get Category Breakdown**: Pie chart data

## 🔗 How to Share the Collection

### Method 1: Share JSON File Directly
1. Send the `Financial_Analytics_Dashboard_API.postman_collection.json` file
2. Recipients can import it using the steps above

### Method 2: Share via Postman Cloud (Recommended)
1. **Export to Postman Cloud:**
   - In Postman, click the collection name
   - Click **"Share"** button
   - Choose **"Share collection"**
   - Set visibility (Public/Private)
   - Click **"Share"**
   - Copy the generated link

2. **Share the Link:**
   - Send the link to others
   - They can click **"Run in Postman"** to import

### Method 3: Create a Public Workspace
1. Create a new workspace in Postman
2. Add your collection to the workspace
3. Make the workspace public
4. Share the workspace URL

### Method 4: GitHub Integration
1. Add the collection to your GitHub repository
2. Create a README with import instructions
3. Share the GitHub repository link

## 📝 Example Usage Workflow

### Complete Testing Workflow:
1. **Start your backend server** (`npm run dev` in server directory)
2. **Import the collection** into Postman
3. **Set up environment variables**
4. **Register a user** (Authentication → Register User)
5. **Login and get token** (Authentication → Login User)
6. **Set auth_token variable** with the received token
7. **Test transaction endpoints** (Transactions folder)
8. **Test CSV export** (CSV Export folder)
9. **Test analytics endpoints** (Analytics folder)

## 🔧 Customization

### Modify Base URL
- Change the `base_url` variable for different environments:
  - Local: `http://localhost:5000`
  - Development: `https://dev-api.yourapp.com`
  - Production: `https://api.yourapp.com`

### Add Custom Headers
- You can add custom headers to requests as needed
- Common additions: `X-API-Key`, `X-Client-Version`

### Modify Request Bodies
- Update the example request bodies with your actual data
- Test different scenarios and edge cases

## 🐛 Troubleshooting

### Common Issues:

1. **"Connection refused"**
   - Ensure your backend server is running
   - Check if the port (5000) is correct

2. **"401 Unauthorized"**
   - Make sure you've set the `auth_token` variable
   - Verify the token is valid and not expired

3. **"404 Not Found"**
   - Check if the API endpoints match your backend routes
   - Verify the base URL is correct

4. **"500 Internal Server Error"**
   - Check your backend logs for errors
   - Verify your MongoDB connection

## 📊 Testing Different Scenarios

### Test Data Examples:

**Create Revenue Transaction:**
```json
{
  "date": "2024-01-15T10:30:00.000Z",
  "amount": 2500.00,
  "category": "Revenue",
  "description": "Product sales",
  "status": "Paid",
  "user_id": "user_001",
  "user_profile": "https://example.com/profile.jpg"
}
```

**Create Expense Transaction:**
```json
{
  "date": "2024-01-16T14:20:00.000Z",
  "amount": 850.50,
  "category": "Expense",
  "description": "Office supplies",
  "status": "Pending",
  "user_id": "user_002",
  "user_profile": "https://example.com/profile2.jpg"
}
```

**Filter Transactions:**
```json
{
  "startDate": "2024-01-01T00:00:00.000Z",
  "endDate": "2024-12-31T23:59:59.999Z",
  "category": "Revenue",
  "status": "Paid",
  "minAmount": 1000,
  "maxAmount": 5000
}
```

## 🎯 Best Practices

1. **Always test authentication first**
2. **Use environment variables for sensitive data**
3. **Test both success and error scenarios**
4. **Document any custom modifications**
5. **Keep the collection updated with API changes**

## 📞 Support

If you encounter issues:
1. Check the backend logs for errors
2. Verify your environment variables
3. Ensure your backend server is running
4. Check the README.md for setup instructions

---

**Happy Testing! 🚀** 