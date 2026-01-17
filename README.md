# Stock Trading Platform

A modern, full-stack stock trading application built with React, Node.js, and MongoDB. This platform allows users to manage their investment portfolio, view holdings, place orders, and track their trading activity.

## Project Structure

```
Stock Trading Platform/
├── frontend/                 # React frontend (Port 3003)
│   ├── src/
│   │   ├── landing_page/    # Landing page components
│   │   ├── components/      # Reusable components
│   │   └── index.js
│   └── package.json
├── dashboard/               # Dashboard/Analytics (Port 3001)
│   ├── src/
│   │   ├── components/
│   │   └── data/
│   └── package.json
├── backend/                 # Node.js backend (Port 3002)
│   ├── index.js
│   ├── model/              # Database models
│   ├── schemas/            # Database schemas
│   └── package.json
└── package.json
```

## Features

- **User Authentication**: Sign up and login functionality
- **Portfolio Management**: View holdings, positions, and orders
- **Trading**: Place buy/sell orders with validation
- **Dashboard**: Analytics and visual charts for market data
- **Responsive Design**: Works on desktop and mobile devices
- **Form Validation**: Client-side validation for user inputs

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (for backend)
- npm or yarn

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/stock-trading-platform.git
cd stock-trading-platform
```

### 2. Install Root Dependencies
```bash
npm install
```

### 3. Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

### 4. Install Dashboard Dependencies
```bash
cd dashboard
npm install
cd ..
```

### 5. Install Backend Dependencies
```bash
cd backend
npm install
cd ..
```

## Configuration

### Backend Setup (.env)
Create a `.env` file in the `backend` directory:
```
MONGO_URI=mongodb://localhost:27017/stock-trading
PORT=3002
JWT_SECRET=your_secret_key_here
```

## Running the Application

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
Backend runs on: `http://localhost:3002`

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```
Frontend runs on: `http://localhost:3003`

**Terminal 3 - Dashboard:**
```bash
cd dashboard
npm start
```
Dashboard runs on: `http://localhost:3001`

## Available Routes

### Frontend (3003)
- `/` - Home page
- `/signup` - Sign up page
- `/login` - Login page
- `/about` - About page
- `/product` - Products page
- `/pricing` - Pricing page
- `/support` - Support page

### Dashboard (3004)
- `/holdings` - User holdings
- `/orders` - Order history
- `/positions` - Current positions
- `/funds` - Fund information
- `/watchlist` - Watch list

## Technologies Used

### Frontend
- React
- React Router
- Bootstrap CSS
- Chart.js (for analytics)

### Dashboard
- React
- Chart.js & React-ChartJS-2
- Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## API Endpoints

### User Routes
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - User login

### Holdings Routes
- `GET /api/holdings` - Get user holdings
- `POST /api/holdings` - Add new holding

### Orders Routes
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Place new order

### Positions Routes
- `GET /api/positions` - Get user positions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@stocktradingplatform.com or open an issue in the GitHub repository.

## Author

Your Name - [GitHub Profile](https://github.com/yourusername)

## Acknowledgments

- Built with React, Node.js, and MongoDB
- Inspired by modern trading platforms like Zerodha
