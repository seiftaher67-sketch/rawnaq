

import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart } from 'react-icons/fi';
import card1 from '../card1.jpg';
import card2 from '../card2.jpg';
import card3 from '../card3.jpg';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState({});

  const products = [
    {
      id: 1,
      name: 'عبابة كتان',
      code: 'JM123',
      price: 250,
      image: card1,
      discount: 25,
    },
    {
      id: 2,
      name: 'طرحة قطن',
      code: 'JM124',
      price: 250,
      image: card2,
      discount: 25,
    },
    {
      id: 3,
      name: 'عبابة كتان',
      code: 'JM125',
      price: 250,
      image: card2,
      discount: 25,
    },
    {
      id: 4,
      name: 'طرحة قطن',
      code: 'JM126',
      price: 250,
      image: card1,
      discount: 25,
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites({
      ...favorites,
      [id]: !favorites[id],
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(products[(currentIndex + i) % products.length]);
    }
    return visible;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <section className="py-12 bg-gray-light">
      <div className="w-full mx-auto px-4">
        {/* Header with Title and Button */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center flex-1 mr-[80px]" style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '48px', leadingTrim: 'none', lineHeight: '100%', letterSpacing: '0%', textAlign: 'right' }}>
            عروض محدودة لفترة قصيرة
          </h2>
          <button className="bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold hover:bg-brand-black hover:text-brand-gold transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 ml-[100px]">
            عرض جميع العروض
          </button>
        </div>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="bg-brand-black text-white rounded-full p-3 hover:bg-brand-softBlack transition-colors flex-shrink-0"
            aria-label="السابق"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Product Cards Container */}
          <div className="flex gap-6 flex-1 overflow-hidden">
            {visibleProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col"
              >
                {/* Product Image Container */}
                <div className="relative bg-gray-100 h-[28rem] flex-grow overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Heart Icon - Top Left */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 left-3 bg-white rounded-full p-2 shadow-soft hover:bg-gray-light transition-colors"
                  >
                    <FiHeart
                      size={20}
                      className={favorites[product.id] ? 'fill-red-500 text-red-500' : 'text-gray-dark'}
                    />
                  </button>

                  {/* Discount Badge - Top Right */}
                  <div className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded font-bold text-sm">
                    {product.discount}%
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-3 flex flex-col">
                  {/* Name and Price Row */}
                  <div className="flex justify-between items-center mb-3">
                    {/* Product Name - Left */}
                    <h3 className="font-sans text-lg font-bold text-left opacity-60" style={{ color: '#666666' }}>
                      {product.name}
                    </h3>

                    {/* Price Section - Right */}
                    <div className="flex flex-col text-right">
                      {/* Current Price */}
                      <p className="font-bold text-xl" style={{ color: '#8B1538' }}>
                        {product.price} <span className="text-sm">ريال</span>
                      </p>
                      {/* Original Price - Strikethrough */}
                      <p className="text-sm" style={{ color: '#999999', textDecoration: 'line-through' }}>
                        {product.price + 50} <span className="text-xs">ريال</span>
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <button className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs">
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

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="bg-brand-black text-white rounded-full p-3 hover:bg-brand-softBlack transition-colors flex-shrink-0"
            aria-label="التالي"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

