# CartMantra Deployment Guide

## Environment Variables Required

### Backend (.env)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cartmantra
JWT_SECRET=your_jwt_secret_key_here
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
REDIS_URL=redis://localhost:6379
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
CLIENT_URL=https://your-frontend-domain.com
PORT=5000
```

### Frontend (.env)
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
VITE_API_URL=https://your-backend-domain.com/api
```

## Deployment Steps

1. **Backend Deployment (Railway/Heroku/Vercel)**
   - Set all environment variables
   - Ensure CORS is configured for your frontend domain
   - Deploy the backend

2. **Frontend Deployment (Vercel/Netlify)**
   - Set environment variables
   - Build and deploy
   - Update CLIENT_URL in backend to match frontend domain

3. **Database Setup**
   - Use MongoDB Atlas for production
   - Run the seeder script to populate initial data

4. **Redis Setup**
   - Use Redis Cloud or Railway Redis for production

5. **Stripe Setup**
   - Use production Stripe keys for live payments
   - Update webhook endpoints

## Fixed Issues

✅ Login/Signup placeholder alignment
✅ Analytics page values display
✅ Category images display
✅ People Also Bought images
✅ Stripe payment integration (INR currency)
✅ CORS configuration
✅ Environment variable configuration
✅ Database seeding
✅ Consistent white/bluish theme
✅ CartMantra logo integration
✅ Indian Rupees currency throughout
