// components/SimilarProducts.jsx
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SimilarProducts({ products }) {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold mb-10 text-black">منتجات مشابهة</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {products.map((p, i) => (
          <div
            key={i}
            className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col"
          >
            {/* Product Image Container */}
            <div className="relative bg-gray-100 h-80 flex-grow overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover object-center"
              />

              {/* Heart Icon - Top Left */}
              <button
                onClick={() => toggleFavorite(p.id || i)}
                className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-soft hover:bg-gray-light transition-colors"
              >
                <FiHeart
                  size={20}
                  className={favorites[p.id || i] ? 'fill-red-500 text-red-500' : 'text-gray-dark'}
                />
              </button>

              {/* Discount Badge - Top Right */}
              {p.discount && (
                <div className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded font-bold text-sm">
                  {p.discount}%
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-3 flex flex-col">
              {/* Name and Price Row */}
              <div className="flex justify-between items-center mb-3">
                {/* Product Name - Left */}
                <h3 className="font-sans text-lg font-bold text-left opacity-60" style={{ color: '#666666' }}>
                  {p.name}
                </h3>

                {/* Price Section - Right */}
                <div className="flex flex-col text-right">
                  {/* Current Price */}
                  <p className="font-bold text-xl" style={{ color: '#8B1538' }}>
                    {p.price} <img src="/images/ry.jpeg" alt="ريال" style={{ width: '20px', height: '10px', verticalAlign: 'middle' }} />
                  </p>
                  {/* Original Price - Strikethrough */}
                  {p.oldPrice && (
                    <p className="text-sm" style={{ color: '#999999', textDecoration: 'line-through' }}>
                      {p.oldPrice} <img src="/images/old ry.jpeg" alt="ريال" style={{ width: '20px', height: '10px', verticalAlign: 'middle', filter: 'grayscale(100%)' }} />
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-auto">
                <button
                  onClick={() => p.id && navigate(`/product/${p.id}`)}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
