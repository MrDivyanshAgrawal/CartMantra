# 🛒 CartMantra – Full-Stack E-Commerce Platform 🚀

CartMantra is a modern full-stack **e-commerce application** built with the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
It offers robust authentication, secure payments, product & category management, a shopping cart system, sales analytics, and an **admin dashboard** – all wrapped in a sleek, responsive design.

---

## 🌟 Key Features

- 🔐 **Authentication System**: Secure signup/login with **JWT** (access & refresh tokens)
- 🛡️ **Data Protection**: Password hashing with **bcrypt**, cookie-based sessions
- 📦 **Product & Category Management**
- 🛒 **Shopping Cart Functionality**
- 💳 **Checkout with Stripe**
- 🏷️ **Coupon Code System**
- 👑 **Admin Dashboard** for analytics and management
- 📊 **Sales Analytics** with Recharts
- 🖼️ **Image Uploads with Cloudinary**
- 🚀 **Caching with Upstash Redis**
- 🎨 **Modern UI** with Tailwind, Framer Motion animations, Zustand state management
- 🔔 **Toast Notifications** with react-hot-toast
- 🎉 **Confetti Animations** for successful checkout
- ⚡ Optimized performance with Redis caching

---

## 🛠️ Technologies & Tools Used

| Layer        | Tools & Libraries |
|-------------|-----------------|
| **Frontend** | React.js, Tailwind CSS, React Router |
| **Backend**  | Node.js, Express.js, JWT, bcryptjs, Mongoose |
| **Database** | MongoDB Atlas |
| **Cloud**    | Cloudinary (for product images) |
| **Utilities**| react-hot-toast, dotenv, Zustand (state management), cookie-parser, CORS, react-confetti, Recharts, Framer Motion, Lucide, Axios|
| **Cache**      | Upstash Redis                                                                    |
| **Payments**   | Stripe                                    |

---

## 📂 Project Structure

```text
CartMantra/
├─ backend/                # Node.js & Express backend
│  ├─ controllers/         # Authentication, products, cart, payments, analytics
│  ├─ models/              # MongoDB Schemas
│  ├─ routes/              # API routes
│  ├─ middleware/          # Auth, error handling, validations
│  ├─ db/                  # MongoDB & Redis connections
│  ├─ seeds/               # Sample data for seeding
│  └─ utils/               # Helper functions & constants
├─ frontend/               # React frontend
│  ├─ src/
│  │  ├─ components/       # Reusable React components
│  │  ├─ pages/            # Home, Products, Cart, Checkout, Dashboard
│  │  ├─ stores/           # Zustand state management
│  │  └─ lib/              # Axios setup, utility functions
├─ README.md
└─ package.json
```
---

## 🎉 Conclusion

**CartMantra** is a complete e-commerce solution with robust backend features, secure authentication, Stripe payments, and a modern, responsive frontend. Perfect for learning or deploying a production-ready store.

--- 

## 👨‍💻 Author

Divyansh Agrawal – Built with ❤️ using MERN, Redis, Cloudinary & Stripe.