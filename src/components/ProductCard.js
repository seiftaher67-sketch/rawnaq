import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useFavorites } from '../context/FavoritesContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  // Make sure product is not null or undefined
  if (!product) {
    return null;
  }

  const handleToggleFavorite = () => {
    toggleFavorite(product);
  };

  return (
    <div
      className="
        flex-none
        w-[350px] h-[489px]
        snap-start
        bg-white rounded-3xl border border-gray-200
        overflow-hidden hover:shadow-soft transition
        flex flex-col
      "
    >
      {/* Image */}
      <div className="relative h-[26rem] bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />

        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 left-3 bg-white p-2 rounded-full shadow"
        >
          <FiHeart
            size={20}
            className={
              isFavorite(product.id)
                ? 'text-red-500 fill-red-500'
                : 'text-gray-600'
            }
          />
        </button>

        {product.discount && (
          <span className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded text-sm font-bold">
            {product.discount}%
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between mb-3">
          <h3 className="font-calibri font-normal text-2xl leading-none tracking-normal">{product.name}</h3>
          <div className="text-right">
            <p className="font-bold text-xl text-[#8B1538] flex items-baseline">
              {product.price} <span className="text-[#000080]" style={{ fontSize: 'inherit' }}>ريال</span>
            </p>
            {product.price && ( // Assuming original price might not always be present
              <p className="text-sm line-through text-gray-400 flex items-baseline">
                {product.price + 50} <span className="text-gray-500" style={{ fontSize: 'inherit' }}>ريال</span>
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => navigate(`/product/${product.id}`)}
            className="flex-1 bg-brand-black text-white py-2 rounded-full font-bold hover:bg-brand-softBlack transition"
            style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '16px', lineHeight: '100%', letterSpacing: '0%' }}
          >
            اشتري الآن
          </button>
          <button className="p-3 border rounded-full">
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;