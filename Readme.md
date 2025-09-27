# CartMantra – Full-Stack E-Commerce Platform 🛒

A modern, full-stack e-commerce application built with the MERN stack. CartMantra provides comprehensive online shopping experience with secure payments, admin dashboard, sales analytics, and advanced features like caching and coupon systems.

## 🌐 Live Demo

**🚀 [CartMantra Live Application](https://cartmantra.onrender.com)**

*Experience the complete e-commerce flow with Stripe test payments and admin features*

## ✨ Core Features

- 🔐 **JWT Authentication** - Secure signup/login with access & refresh tokens
- 🛒 **Shopping Cart System** - Add, remove, and manage cart items
- 💳 **Stripe Payment Integration** - Secure checkout with multiple payment methods
- 🏷️ **Coupon Code System** - Discount codes and promotional offers
- 👑 **Admin Dashboard** - Complete store management interface
- 📊 **Sales Analytics** - Revenue tracking with interactive charts
- 🖼️ **Image Management** - Product image uploads with Cloudinary
- ⚡ **Redis Caching** - Optimized performance with Upstash Redis
- 🎨 **Modern UI/UX** - Responsive design with animations

## 🛠️ Tech Stack

### Frontend
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) **React.js** - Component-based UI library
- ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) **Tailwind CSS** - Utility-first CSS framework
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) **React Router** - Client-side routing
- ![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue) **Framer Motion** - Smooth animations
- 📊 **Recharts** - Interactive sales charts
- 🐻 **Zustand** - Lightweight state management
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) **Axios** - HTTP client
- 🎉 **React Confetti** - Celebration animations

### Backend
- ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) **Node.js & Express.js** - Server framework
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) **MongoDB & Mongoose** - Database and ODM
- ![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink) **JWT** - Token-based authentication
- 🔐 **Bcryptjs** - Password hashing and security
- ![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white) **Stripe** - Payment processing
- ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white) **Cloudinary** - Image management
- ![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white) **Upstash Redis** - Caching solution

### Deployment
- ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) **Render** - Cloud hosting
- ![MongoDB](https://img.shields.io/badge/MongoDB%20Atlas-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) **MongoDB Atlas** - Database hosting

### Development Tools
- ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) **Git** - Version control
- ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) **GitHub** - Code repository
- ![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white) **VS Code** - Code editor
- ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) **Postman** - API testing

## 📁 Project Structure

```
CartMantra/
├── 📂 backend/
│   ├── 📂 controllers/          # Business logic
│   │   ├── auth.controller.js
│   │   ├── cart.controller.js
│   │   ├── coupon.controller.js
│   │   ├── payment.controller.js
│   │   ├── product.controller.js
│   │   └── analytics.controller.js
│   ├── 📂 db/
│   │   └── connectDB.js         # Database connection
│   ├── 📂 middleware/
│   │   └── auth.middleware.js   # JWT authentication
│   ├── 📂 models/               # Database schemas
│   │   ├── coupon.model.js
│   │   ├── order.model.js
│   │   ├── product.model.js
│   │   └── user.model.js
│   ├── 📂 routes/               # API endpoints
│   │   ├── auth.route.js
│   │   ├── cart.route.js
│   │   ├── coupon.route.js
│   │   ├── payment.route.js
│   │   ├── product.route.js
│   │   └── analytics.route.js
│   ├── 📂 utils/
│   │   ├── redis.js
│   │   └── cloudinary.js
│   ├── constants.js             # DB name file
│   └── server.js                # Main server file
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/       # Reusable components
│   │   │   ├── CartItem.jsx
│   │   │   ├── CategoryItem.jsx
│   │   │   ├── CreateProductForm.jsx
│   │   │   ├── FeaturedProducts.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── OrderSummary.jsx
│   │   │   ├── PeopleAlsoBought.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── 📂 pages/            # Page components
│   │   │   ├── AdminPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── CategoryPage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── PurchaseSuccessPage.jsx
│   │   │   ├── PurchaseCancelPage.jsx
│   │   │   └── SignUpPage.jsx
│   │   ├── 📂 stores/           # State management
│   │   │   ├── useCartStore.js
│   │   │   ├── useProductStore.js
│   │   │   └── useUserStore.js
│   │   ├── 📂 lib/              # Utilities
│   │   │   └── axios.js
│   │   └── App.jsx
│   ├── tailwind.config.js
│   └── vite.config.js
├── package.json
├── LICENSE
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account
- Stripe account
- Cloudinary account
- Upstash Redis account

### 1. Clone Repository
```bash
git clone https://github.com/MrDivyanshAgrawal/CartMantra.git
cd CartMantra
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cartmantra

# JWT Configuration
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Redis Configuration
UPSTASH_REDIS_URL=your_upstash_redis_url
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create `.env` file:
```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
```

### 4. Start Development Servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 🌐 Production Environment Variables

### Backend (.env)
```env
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cartmantra
ACCESS_TOKEN_SECRET=your_production_access_token_secret
REFRESH_TOKEN_SECRET=your_production_refresh_token_secret
STRIPE_SECRET_KEY=sk_live_your_live_stripe_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
UPSTASH_REDIS_URL=your_upstash_redis_url
CLIENT_URL=https://cartmantra.onrender.com
```

### Frontend (.env)
```env
VITE_API_URL=https://cartmantra.onrender.com/api
```

## 🎯 Key API Endpoints

### Authentication
```
POST   /api/auth/signup          # User registration
POST   /api/auth/login           # User login
POST   /api/auth/logout          # User logout
POST   /api/auth/refresh-token   # Refresh access token
GET    /api/auth/profile         # Get user profile
```

### Products
```
GET    /api/products             # Get all products
GET    /api/products/category/:category  # Get products by category
GET    /api/products/featured    # Get featured products
POST   /api/products             # Create product (admin)
PUT    /api/products/:id         # Update product (admin)
DELETE /api/products/:id         # Delete product (admin)
```

### Cart & Orders
```
GET    /api/cart                 # Get user cart
POST   /api/cart                 # Add to cart
DELETE /api/cart                 # Remove from cart
PUT    /api/cart/:id             # Update cart quantity
```

### Payments
```
POST   /api/payments/create-checkout-session  # Create Stripe session
POST   /api/payments/checkout-success         # Handle successful payment
```

### Analytics (Admin)
```
GET    /api/analytics            # Get sales analytics
GET    /api/analytics/users      # Get user analytics
GET    /api/analytics/sales      # Get sales data
```

## 🧪 Testing

### Payment Testing
Use Stripe test cards:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Insufficient Funds**: `4000 0000 0000 9995`

### Admin Access
```
Default Admin Credentials:
Email: admin@cartmantra.com
Password: admin123
```

### API Testing
```bash
# Test server health
curl http://localhost:5000/api/products

# Test authentication
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## 📦 Build & Deploy

### Build Commands
```bash
# Frontend build
npm run build

# Production start
npm run start
```

### Deployment Scripts
```json
{
  "scripts": {
    "build": "npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend",
    "start": "npm run start --prefix backend",
    "dev": "npm run dev --prefix backend"
  }
}
```

## 🔒 Security Features

- **JWT Authentication** with access/refresh token rotation
- **Password Hashing** using bcrypt with salt rounds
- **CORS Protection** for cross-origin requests
- **Input Validation** and sanitization
- **Admin Role Protection** for sensitive operations
- **Environment Variable Protection**
- **Secure Cookie Handling**

## 📊 Project Metrics

- **25+ API Endpoints**
- **20+ React Components**
- **4 Database Models**
- **Redis Caching Layer**
- **12,000+ Lines of Code**

## 🎨 UI/UX Features

- **Responsive Design** for all screen sizes
- **Smooth Animations** with Framer Motion
- **Interactive Charts** for sales analytics
- **Toast Notifications** for user feedback
- **Loading States** and error handling
- **Confetti Celebrations** on successful purchases
- **Modern Card Layouts** with hover effects

## 🚀 Performance Optimizations

- **Redis Caching** for frequently accessed data
- **Image Optimization** with Cloudinary
- **Code Splitting** for faster load times
- **Lazy Loading** for components
- **Optimized API Calls** with proper error handling

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open Pull Request

## 👨‍💻 Developer

**Divyansh Agrawal**
- GitHub: [@MrDivyanshAgrawal](https://github.com/MrDivyanshAgrawal)
- LinkedIn: [Divyansh Agrawal](https://www.linkedin.com/in/divyansh-agrawal-673420257)

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

---

**⭐ Star this repository if you found it helpful!**

**🚀 [Live Demo](https://cartmantra.onrender.com) | 📚 [Documentation](#) | 🐛 [Report Bug](https://github.com/MrDivyanshAgrawal/CartMantra/issues)**

*Built with ❤️ using the MERN Stack + Redis + Stripe*
