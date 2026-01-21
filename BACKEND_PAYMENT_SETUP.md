# Backend Payment Integration Setup Guide

## ✅ Backend is Ready!

Your backend is properly configured with:
- ✅ Payment routes at `/api/v1/payments/create-order` and `/api/v1/payments/verify`
- ✅ Razorpay integration in `paymentController.js`
- ✅ CORS configured to allow `http://localhost:5173` (Vite default port)
- ✅ Frontend configured to use `http://localhost:5000/api/v1` by default

## 🚀 Quick Start

### Step 1: Start the Backend Server

```powershell
cd Backend
npm install  # If not already installed
npm run dev  # Start in development mode
```

The backend will start on `http://localhost:5000`

### Step 2: Configure Environment Variables

#### Backend `.env` file (in `Backend/` folder):

```env
PORT=5000
NODE_ENV=development

# Database (use your actual credentials)
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

# JWT
JWT_SECRET=yourSecretKeyChangeThisInProduction
JWT_EXPIRE=7d

# CORS (optional - defaults to localhost:5173 in dev)
CORS_ORIGIN=http://localhost:5173

# Razorpay (REQUIRED for payments)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

#### Frontend `.env` file (in `Frontend/` folder):

```env
# API Configuration (optional - defaults to localhost:5000 in dev)
VITE_API_BASE_URL=http://localhost:5000/api/v1

# Razorpay (REQUIRED for payments)
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

**Note:** The frontend will automatically use `http://localhost:5000/api/v1` if `VITE_API_BASE_URL` is not set.

### Step 3: Start the Frontend

```powershell
cd Frontend
npm install  # If not already installed
npm run dev  # Start in development mode
```

The frontend will start on `http://localhost:5173` (or another port if 5173 is busy)

## 🔍 Verify Connection

### Test Backend Health:
```powershell
# In PowerShell
Invoke-WebRequest -Uri "http://localhost:5000/health" -Method GET
```

Or open in browser: `http://localhost:5000/health`

### Test Payment Endpoint:
```powershell
# Test payment order creation
$body = @{
    amount = 10000
    currency = "INR"
    receipt = "test_receipt_123"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/api/v1/payments/create-order" `
    -Method POST `
    -ContentType "application/json" `
    -Body $body
```

## 🎯 Payment Flow

1. **User clicks "Pay & Book Consultation"**
   - Frontend calls: `POST /api/v1/payments/create-order`
   - Backend creates Razorpay order and returns `order_id`

2. **Razorpay Payment Modal Opens**
   - User completes payment in Razorpay modal
   - Razorpay returns payment details

3. **Payment Verification**
   - Frontend calls: `POST /api/v1/payments/verify`
   - Backend verifies signature and payment status
   - Returns success/failure

4. **Application Submission**
   - Frontend submits RTI application with payment details
   - Backend saves application with payment ID

## 🔧 Troubleshooting

### "Network error" or "Backend server is not running"
- ✅ Ensure backend is running: `cd Backend && npm run dev`
- ✅ Check backend is on port 5000: `http://localhost:5000/health`
- ✅ Verify CORS allows your frontend origin

### "Razorpay Key ID is missing"
- ✅ Add `VITE_RAZORPAY_KEY_ID` to `Frontend/.env`
- ✅ Restart frontend dev server after adding env vars

### "Razorpay credentials are not configured"
- ✅ Add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` to `Backend/.env`
- ✅ Restart backend server after adding env vars

### "CORS error"
- ✅ Backend CORS is configured to allow `http://localhost:5173` in development
- ✅ If using a different port, add it to `CORS_ORIGIN` in backend `.env`
- ✅ Or modify `Backend/middlewares/security.js` to add your port

### Payment fails after Razorpay modal
- ✅ Check backend logs for verification errors
- ✅ Verify Razorpay keys are correct (test vs production)
- ✅ Check network tab in browser DevTools for API errors

## 📝 Important Notes

1. **Razorpay Keys**: You need both:
   - `RAZORPAY_KEY_ID` (public key) - goes in frontend
   - `RAZORPAY_KEY_SECRET` (private key) - goes in backend only

2. **Environment Variables**: 
   - Frontend env vars must start with `VITE_` to be accessible
   - Restart dev servers after changing `.env` files

3. **CORS**: Backend automatically allows:
   - `http://localhost:5173` (Vite default)
   - `http://localhost:3000` (React default)
   - In development mode

4. **Payment Amount**: Amounts are in **paise** (₹100 = 10000 paise)

## ✅ Checklist

- [ ] Backend server running on port 5000
- [ ] Frontend server running (usually port 5173)
- [ ] Backend `.env` has `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`
- [ ] Frontend `.env` has `VITE_RAZORPAY_KEY_ID`
- [ ] Database connection working
- [ ] Health check endpoint returns success
- [ ] CORS allows frontend origin
- [ ] Test payment flow end-to-end

## 🎉 You're All Set!

Once both servers are running and Razorpay keys are configured, payments should work seamlessly!




