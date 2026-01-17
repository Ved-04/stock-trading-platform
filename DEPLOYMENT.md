# Deployment Guide

This guide covers deploying the Stock Trading Platform to production.

## Architecture

```
Frontend (React)     → Vercel
Dashboard (React)    → Vercel  
Backend (Node.js)    → Railway/Render/Heroku
Database (MongoDB)   → MongoDB Atlas
```

## Frontend Deployment on Vercel

### Step 1: Prepare Frontend for Vercel

The `vercel.json` file is already configured. Make sure your `frontend/package.json` has:

```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
}
```

### Step 2: Connect GitHub to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your `stock-trading-platform` repository
5. Configure:
   - **Framework**: React
   - **Root Directory**: `./frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

### Step 3: Add Environment Variables

In Vercel Project Settings → Environment Variables, add:

```
REACT_APP_API_URL=https://your-backend-url.com
```

### Step 4: Deploy

Click "Deploy" - Vercel will automatically build and deploy!

---

## Dashboard Deployment on Vercel

Repeat the same steps but:
- **Root Directory**: `./dashboard`
- **REACT_APP_API_URL**: Same backend URL

---

## Backend Deployment on Railway/Render

### Option 1: Railway (Recommended - Easy)

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your `stock-trading-platform` repo
5. Create a new service for backend
6. Add environment variables:
   ```
   MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/dbname
   PORT=3002
   JWT_SECRET=your_secret_key
   NODE_ENV=production
   ```
7. Set start command: `npm start` (in backend directory)

### Option 2: Render

1. Go to [render.com](https://render.com)
2. Connect GitHub
3. Create New → Web Service
4. Select your repo
5. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add environment variables
7. Deploy

---

## Database: MongoDB Atlas

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free account
3. Create a cluster
4. Create database user
5. Get connection string: `mongodb+srv://user:password@cluster.mongodb.net/stock-trading`
6. Use this as `MONGO_URI` in backend environment variables

---

## Update Frontend API Calls

Update your frontend to use the deployed backend URL:

```javascript
// Before
const API_URL = 'http://localhost:3002';

// After
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3002';
```

---

## Testing Deployed App

After deployment:

1. Visit `https://your-frontend.vercel.app`
2. Sign up and test the flow
3. Check browser console for API errors
4. Verify backend is responding

---

## Troubleshooting

### 404 Error
- Make sure `vercel.json` is in the project root
- Check that build command is correct
- Verify React Router is configured properly

### CORS Errors
- Update backend `CORS_ORIGIN` environment variable
- Add your Vercel frontend URL to CORS whitelist

### Backend Connection Issues
- Verify `REACT_APP_API_URL` matches your backend URL
- Check MongoDB connection string
- Ensure backend environment variables are set

---

## Summary of URLs After Deployment

- **Frontend**: https://stock-trading-platform.vercel.app
- **Dashboard**: https://stock-trading-dashboard.vercel.app
- **Backend API**: https://stock-trading-backend.railway.app
- **Database**: MongoDB Atlas (private connection)

---

## Continuous Deployment

- **Frontend & Dashboard**: Auto-deploy on push to GitHub (Vercel)
- **Backend**: Auto-deploy on push to GitHub (Railway/Render)

No more manual deployments needed!
