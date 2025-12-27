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
        w-[350px] h-[489px]
        snap-start
        bg-white rounded-3xl border border-gray-200
        overflow-hidden hover:shadow-soft transition
        flex flex-col
      "
      style={{
        width: '350px',
        height: '489px',
        transform: 'rotate(0deg)',
        opacity: 1,
        borderRadius: '24px',
        borderWidth: '1px'
      }}
    >
      {/* Image */}
      <div className="relative h-[20rem] bg-gray-100">
        <img
          src={productData.image}
          alt={productData.name}
          className="w-full h-full object-cover"
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

      {/* Info */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between mb-3 items-start">
          <h3 className="font-calibri font-normal text-2xl leading-none tracking-normal">{productData.name}</h3>
          <div className="text-center pr-4">
            <p className="font-bold text-xl text-[#8B1538] flex items-baseline justify-center">
              {productData.price}
              <img src="/images/ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px' }} />
            </p>
            {productData.oldPrice && (
              <p className="text-sm line-through text-gray-400 flex items-baseline justify-center">
                {productData.oldPrice}
                <img src="/images/old ry.jpeg" alt="ريال" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginLeft: '4px', filter: 'grayscale(100%)' }} />
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => navigate(`/product/${productData.id}`)}
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
}