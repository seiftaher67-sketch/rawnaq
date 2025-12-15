import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col">
      <div className="relative bg-gray-100 h-80 flex-grow overflow-hidden">
        <img
          src={product.image || '/placeholder-product.jpg'}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
        {product.discount && (
          <div className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded font-bold text-sm">
            {product.discount}%
          </div>
        )}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-soft hover:bg-gray-light transition-colors"
        >
          <FiHeart
            size={20}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-dark'}
          />
        </button>
      </div>
      <div className="p-3 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-sans text-lg font-bold text-left opacity-60" style={{ color: '#666666' }}>
            {product.name}
          </h3>
          <div className="flex flex-col text-right">
            <p className="font-bold text-xl" style={{ color: '#8B1538' }}>
              {product.price} <span className="text-sm">ريال</span>
            </p>
            {product.originalPrice && (
              <p className="text-sm" style={{ color: '#999999', textDecoration: 'line-through' }}>
                {product.originalPrice} <span className="text-xs">ريال</span>
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2 mt-auto">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs text-center"
            style={{
              fontFamily: 'Calibri',
              fontWeight: 700,
              fontStyle: 'Bold',
              fontSize: '16px',
              leadingTrim: 'NONE',
              lineHeight: '100%',
              letterSpacing: '0%'
            }}
          >
            اشتري الآن
          </Link>
          <button className="bg-gray-light border border-gray-200 rounded-full p-2 hover:bg-gray-light transition-colors flex-shrink-0">
            <FiShoppingCart size={18} className="text-brand-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
