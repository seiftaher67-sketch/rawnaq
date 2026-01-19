import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useFavorites } from '../context/FavoritesContext';

export default function ProductCard({
  product, // Prefer passing the whole product object
  id,
  image,
  name,
  price,
  oldPrice,
  discount,
  onCartClick,
  isSelected,
}) {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  // Consolidate product data. If a full 'product' object is passed, use it.
  // Otherwise, use individual props. This provides flexibility.
  const productData = product || { id, image, name, price, oldPrice, discount };

  const handleToggleFavorite = () => {
    toggleFavorite(productData);
  };

  // The card styling from the Home page carousel
  return (
    <div
      className="
        flex-none
        w-[350px]
        snap-start
        bg-white rounded-3xl border border-gray-400
        overflow-hidden hover:shadow-soft transition
        flex flex-col
      "
    >
      {/* Product Image Container */}
      <div className="relative bg-gray-100 h-[20rem] lg:h-[26rem] flex-grow overflow-hidden">
        <img
          src={productData.image}
          alt={productData.name}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => navigate(`/product/${productData.id}`)}
        />

        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 left-3 bg-white p-2 rounded-full shadow"
        >
          <FiHeart
            size={20}
            className={
              isFavorite(productData.id)
                ? 'text-red-500 fill-red-500'
                : 'text-gray-600'
            }
          />
        </button>

        {productData.discount && (
          <span className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded text-sm font-bold">
            {productData.discount}%
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col">
        {/* Name and Price Row */}
        <div className="flex justify-between items-baseline mb-3">
          {/* Product Name - Left */}
          <h3 style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%' }}>
            {productData.name}
          </h3>

          {/* Price Section - Right */}
          <div className="text-right" style={{ marginRight: '8px', transform: 'translateX(-15px)' }}>
            {/* Current Price */}
            <p className="font-bold text-xl text-[#8B1538]" style={{ display: 'flex', alignItems: 'center' }}>
              {productData.price} <img src="/images/ry.jpeg" alt="ريال" style={{ width: '1.25rem', height: '1.25rem', marginLeft: '2px' }} />
            </p>
            {/* Original Price - Strikethrough */}
            {productData.oldPrice && (
              <p className="text-sm line-through text-gray-400" style={{ display: 'flex', alignItems: 'center' }}>
                {productData.oldPrice} <img src="/images/old ry.jpeg" alt="ريال" style={{ width: '0.625rem', height: '0.625rem', marginLeft: '2px', filter: 'grayscale(100%)' }} />
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => navigate(`/product/${productData.id}`)}
            className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs focus:outline-none focus:ring-0"
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
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCartClick && onCartClick();
            }}
            className="p-3 border rounded-full flex-shrink-0 focus:outline-none focus:ring-0"
          >
            <FiShoppingCart size={18} className={isSelected ? "text-green-500" : "text-brand-black"} />
          </button>
        </div>
      </div>
    </div>
  );
}