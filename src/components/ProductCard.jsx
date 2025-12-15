import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({
  id,
  image = "/1.png",
  name = "اسم المنتج",
  price = 0,
  oldPrice,
  showOldPrice = false,
  variant = "default",
  discount = 0,
}) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const showBuyBtn = variant !== "compact";
  const showHeart = variant !== "compact";

  return (
    <div className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col">

      {/* Product Image Container */}
      <div className="relative bg-gray-100 h-[28rem] flex-grow overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />

        {/* Heart Icon - Top Left */}
        {showHeart && (
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-soft hover:bg-gray-light transition-colors"
          >
            <FiHeart
              size={20}
              className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-dark'}
            />
          </button>
        )}

        {/* Discount Badge - Top Right */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded font-bold text-sm">
            {discount}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col">
        {/* Name and Price Row */}
        <div className="flex justify-between items-center mb-3">
          {/* Product Name - Left */}
          <h3 className="font-sans text-lg font-bold text-left opacity-60" style={{ color: '#666666' }}>
            {name}
          </h3>

          {/* Price Section - Right */}
          <div className="flex flex-col text-right">
            {/* Current Price */}
            <p className="font-bold text-xl" style={{ color: '#8B1538' }}>
              {price} <span className="text-sm">ريال</span>
            </p>
            {/* Original Price - Strikethrough */}
            {showOldPrice && (
              <p className="text-sm" style={{ color: '#999999', textDecoration: 'line-through' }}>
                {oldPrice} <span className="text-xs">ريال</span>
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {showBuyBtn && (
          <div className="flex gap-2 mt-auto">
            <button
              onClick={() => id && navigate(`/product/${id}`)}
              className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs"
              style={{
                fontFamily: 'Calibri',
                fontWeight: 700,
                fontStyle: 'Bold',
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              اشتري الآن
            </button>
            <button className="bg-gray-light border border-gray-200 rounded-full p-2 hover:bg-gray-light transition-colors flex-shrink-0">
              <FiShoppingCart size={18} className="text-brand-black" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
