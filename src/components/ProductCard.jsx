import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id,
  image = "/1.png",
  name = "اسم المنتج",
  price = 0,
  oldPrice,
  showOldPrice = false,
  variant = "default",
}) {
  const navigate = useNavigate();
  // Variants logic
  const imageHeight = {
    default: "h-80",
    offer: "h-72",
    compact: "h-48",
    home: "h-60",
  }[variant];

  const showBuyBtn = variant !== "compact";
  const showHeart = variant !== "compact";

  return (
    <div className="relative bg-white border border-gray-200 shadow-card rounded-lg overflow-hidden hover:shadow-lg transition h-[42rem] flex flex-col">

      {/* Heart Icon */}
      {showHeart && (
        <button className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md hover:text-[#C8A06A] transition z-10">
          <FiHeart className="text-xl" />
        </button>
      )}

      {/* Product Image */}
      <div className="w-full flex-1 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between flex-shrink-0">
        {/* Name + Price */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-semibold text-[#0F0F0F] flex-1">{name}</h3>
            <span className="text-lg font-bold text-[#C8A06A] mr-2 flex-shrink-0">
              {price} ر.س
            </span>
          </div>

          {/* Old Price */}
          {showOldPrice && (
            <p className="text-gray-500 line-through text-sm mb-3">
              {oldPrice} ر.س
            </p>
          )}
        </div>

        {/* Buttons */}
        {showBuyBtn && (
          <div className="flex items-center gap-3 mt-auto">
            <button className="w-12 h-12 flex items-center justify-center bg-[#0F0F0F] text-white rounded-md hover:bg-[#222] transition flex-shrink-0">
              <FiShoppingCart className="text-2xl" />
            </button>

            <button
              onClick={() => id && navigate(`/product/${id}`)}
              className="flex-1 py-3 bg-[#C8A06A] text-white rounded-md text-lg font-semibold hover:bg-[#B58F5D] transition"
            >
              اشترِي الآن
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
