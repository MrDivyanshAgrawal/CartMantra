import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
  const { user } = useUserStore();
  const { addToCart } = useCartStore();
  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="flex w-full relative flex-col overflow-hidden rounded-lg card">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="object-cover w-full"
          src={product.image}
          alt={product.name}
          onError={(e) => {
            console.log("Image failed to load:", product.image);
            e.target.src = "https://via.placeholder.com/500x500?text=No+Image";
          }}
          onLoad={() =>
            console.log("Image loaded successfully:", product.image)
          }
        />
      </div>

      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-800">
          {product.name}
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-blue-600">
              ₹{product.price}
            </span>
          </p>
        </div>
        <button
          className="btn-primary flex items-center justify-center px-5 py-2.5 text-center text-sm font-medium"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={22} className="mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;