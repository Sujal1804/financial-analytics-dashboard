# Looprai Financial Analytics Backend

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your values.
3. Build and run:
   ```bash
   npm run build
   npm start
   ```
   Or for development:
   ```bash
   npm run dev
   ```

## API Endpoints

### Auth
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT

### Transactions (JWT required)
- `GET /api/transactions` — List, filter, search, sort, paginate
- `POST /api/transactions` — Create transaction
- `PUT /api/transactions/:id` — Update transaction
- `DELETE /api/transactions/:id` — Delete transaction

### CSV Export (JWT required)
- `POST /api/csv/export` — Export filtered transactions as CSV (select columns)

## Sample Data
Place your `transactions.json` in the `data/` folder for import scripts. 