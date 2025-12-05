import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group h-[36rem]">
      <div className="relative">
        <img
          src={product.image || '/placeholder-product.jpg'}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '24px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%' }}>
          {product.name}
        </h3>
        <div className="flex items-center justify-between mb-3">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice} ريال
              </span>
            )}
            <span className="text-xl font-bold text-pink-600">
              {product.price} ريال
            </span>
          </div>
        </div>
        <Link
          to={`/product/${product.id}`}
          className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors text-center block font-medium"
          style={{ fontFamily: 'Calibri', fontWeight: 700, fontStyle: 'Bold', fontSize: '16px', leadingTrim: 'NONE', lineHeight: '100%', letterSpacing: '0%' }}
        >
          اشتري الآن
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
