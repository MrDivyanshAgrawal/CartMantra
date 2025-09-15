import connectDB from "../db/index.db.js";
import dotenv from "dotenv";
import { Product } from "../models/product.model.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "..", "..", ".env") });

const sampleProducts = [
  // Jeans
  {
    name: "Classic Blue Jeans",
    description: "Comfortable and stylish blue jeans perfect for any occasion",
    price: 2499,
    category: "jeans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2sVHIry8mKGvctfSSDURN4Lm6h2nWzhrf3g&s",
    isFeatured: true,
  },
  {
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans with stretch fabric",
    price: 2999,
    category: "jeans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHiNw-70UA6036xpOD0Wx9jix8OLu14M9niw&s",
    isFeatured: false,
  },
  {
    name: "Distressed Jeans",
    description: "Trendy distressed jeans with a rugged look",
    price: 3299,
    category: "jeans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAm1PxTeliDcaCfptPkUOT3rDk_ttpK2AJBA&s",
    isFeatured: false,
  },
  {
    name: "Black Skinny Jeans",
    description: "Stretchable black skinny jeans for a sleek style",
    price: 2799,
    category: "jeans",
    image: "https://imagescdn.pantaloons.com/img/app/product/9/911813-11282140.jpg?auto=format&w=450",
    isFeatured: true,
  },

  // T-Shirts
  {
    name: "Vintage T-Shirt",
    description: "Soft cotton t-shirt with vintage design",
    price: 999,
    category: "t-shirts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cJhqpKk-8qhA5OC-_wCd6Jthhd9e_efygg&s",
    isFeatured: true,
  },
  {
    name: "Graphic T-Shirt",
    description: "Cool graphic t-shirt with unique design",
    price: 1249,
    category: "t-shirts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzaE8hSs6yyhXtiJXaG_QXh020NHzltzg8jg&s",
    isFeatured: false,
  },
  {
    name: "Plain White Tee",
    description: "Classic plain white t-shirt made of 100% cotton",
    price: 799,
    category: "t-shirts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzQRmuhVVQ5H7VQVIhvACXITzmsa0jNF_kJQ&s",
    isFeatured: false,
  },
  {
    name: "Striped T-Shirt",
    description: "Casual striped t-shirt with a modern look",
    price: 1099,
    category: "t-shirts",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfVnHNL1jmJb4panxSd9Q-Mqka4iKNpelqOw&s",
    isFeatured: false,
  },

  // Shoes
  {
    name: "Running Shoes",
    description: "Comfortable running shoes for daily workouts",
    price: 4499,
    category: "shoes",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMQMF66PmpaIdJFjpiyPyI5Vsz3-W6fCaqDg&s",
    isFeatured: true,
  },
  {
    name: "Casual Sneakers",
    description: "Comfortable casual sneakers for everyday wear",
    price: 3499,
    category: "shoes",
    image: "https://redtape.com/cdn/shop/files/RMV0171_1.jpg?v=1754303904",
    isFeatured: false,
  },
  {
    name: "High-Top Sneakers",
    description: "Trendy high-top sneakers for a stylish look",
    price: 3999,
    category: "shoes",
    image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/MARCH/17/mH47rNAM_dbfa0647a8954f8ebbf3f02a77c87b87.jpg",
    isFeatured: false,
  },
  {
    name: "Leather Formal Shoes",
    description: "Premium leather formal shoes for business occasions",
    price: 5999,
    category: "shoes",
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/22326176/2023/4/3/84870f1c-41dd-4bdd-a708-f0d94cf6386e1680522600673-Van-Heusen-Men-Formal-Shoes-631680522600322-1.jpg",
    isFeatured: true,
  },

  // Glasses
  {
    name: "Sunglasses",
    description: "Stylish sunglasses with UV protection",
    price: 1999,
    category: "glasses",
    image: "https://www.dervin.in/cdn/shop/files/DRVN523a_4ecdfce5-0de2-482a-8c9c-2c9cc5160780.jpg?v=1720952481",
    isFeatured: false,
  },
  {
    name: "Aviator Sunglasses",
    description: "Classic aviator sunglasses with polarized lenses",
    price: 2499,
    category: "glasses",
    image: "https://india.ray-ban.com/media/catalog/product/cache/9198bde1d0eff71feec5e39d680e88c5/0/r/0rb3025_919648_030a_new_1.png",
    isFeatured: true,
  },
  {
    name: "Wayfarer Sunglasses",
    description: "Trendy wayfarer sunglasses for everyday wear",
    price: 1799,
    category: "glasses",
    image: "https://images-static.nykaa.com/media/catalog/product/2/b/2b4de7aMVOYAG00000143_1.jpg?tr=w-500",
    isFeatured: false,
  },

  // Jackets
  {
    name: "Leather Jacket",
    description: "Premium leather jacket for a bold look",
    price: 7499,
    category: "jackets",
    image: "https://cdn-images.farfetch-contents.com/17/81/19/24/17811924_37690679_600.jpg",
    isFeatured: true,
  },
  {
    name: "Denim Jacket",
    description: "Classic denim jacket for casual style",
    price: 4499,
    category: "jackets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVITGcxpPJzgyr0oGo2S1So1iHnpWPe-Raw&s",
    isFeatured: false,
  },
  {
    name: "Bomber Jacket",
    description: "Trendy bomber jacket for a modern look",
    price: 5499,
    category: "jackets",
    image: "https://img.freepik.com/free-photo/still-life-rendering-jackets-display_23-2149745027.jpg?semt=ais_incoming&w=740&q=80",
    isFeatured: true,
  },

  // Suits
  {
    name: "Business Suit",
    description: "Professional business suit for formal occasions",
    price: 9999,
    category: "suits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFBhAP5ze9rQRb_FICaE7qn7tZdSTYHZ8_Q&s",
    isFeatured: false,
  },
  {
    name: "Slim Fit Suit",
    description: "Modern slim fit suit with sharp tailoring",
    price: 10999,
    category: "suits",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUFAnjp85tvKKODnpBKIgF-epcRrIIYTCW0Q&s",
    isFeatured: true,
  },
  {
    name: "Three-Piece Suit",
    description: "Classic three-piece suit with vest",
    price: 12999,
    category: "suits",
    image: "https://images-cdn.ubuy.co.in/67cc6a9ff633c0247d1ea3d2-wangyue-men-double-breasted-suit-3-piece.jpg",
    isFeatured: false,
  },

  // Bags
  {
    name: "Leather Handbag",
    description: "Elegant leather handbag for daily use",
    price: 3999,
    category: "bags",
    image: "https://www.montexoo.in/cdn/shop/files/GenuineLeatherDesignerShoulderTotePurse_2_1_1_1.jpg?v=1707992375",
    isFeatured: false,
  },
  {
    name: "Backpack",
    description: "Durable backpack with multiple compartments",
    price: 2499,
    category: "bags",
    image: "https://assets.ajio.com/medias/sys_master/root/hdc/hc8/15776392773662/-473Wx593H-460568243-black-MODEL.jpg",
    isFeatured: true,
  },
  {
    name: "Tote Bag",
    description: "Casual tote bag for everyday essentials",
    price: 1999,
    category: "bags",
    image: "https://akiiko.com/cdn/shop/files/3-2024-05-11T180233.896_64d2573a-8182-46f5-987a-d94c49028289.jpg?v=1715430880",
    isFeatured: false,
  },
  {
    name: "Messenger Bag",
    description: "Stylish messenger bag for office use",
    price: 3499,
    category: "bags",
    image: "https://m.media-amazon.com/images/I/71jd7iWjhEL._UY1000_.jpg",
    isFeatured: false,
  },
];

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany({});
    console.log("Cleared existing products");

    await Product.insertMany(sampleProducts);
    console.log("Sample products inserted successfully");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
