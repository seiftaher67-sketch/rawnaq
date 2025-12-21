import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiChevronLeft,
  FiChevronRight,
  FiHeart,
  FiShoppingCart,
} from 'react-icons/fi';

import card1 from '../card1.jpg';
import card2 from '../card2.jpg';
import card3 from '../card3.jpg';

const ProductCarousel = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const [favorites, setFavorites] = useState({});

  const products = [
    { id: 1, name: 'عبابة كتان', code: 'JM123', price: 250, image: card1, discount: 25 },
    { id: 2, name: 'طرحة قطن', code: 'JM124', price: 250, image: card2, discount: 25 },
    { id: 3, name: 'عبابة كتان', code: 'JM125', price: 250, image: card2, discount: 25 },
    { id: 4, name: 'طرحة قطن', code: 'JM126', price: 250, image: card1, discount: 25 },
    { id: 5, name: 'عبابة كتان', code: 'JM127', price: 250, image: card3, discount: 25 },
    { id: 6, name: 'طرحة قطن', code: 'JM128', price: 250, image: card1, discount: 25 },
    { id: 7, name: 'عبابة كتان', code: 'JM129', price: 250, image: card2, discount: 25 },
    { id: 8, name: 'طرحة قطن', code: 'JM130', price: 250, image: card3, discount: 25 },
  ];

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollNext = () => {
    carouselRef.current?.scrollBy({
      left: -carouselRef.current.offsetWidth * 0.9,
      behavior: 'smooth',
    });
  };

  const scrollPrev = () => {
    carouselRef.current?.scrollBy({
      left: carouselRef.current.offsetWidth * 0.9,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-12 bg-white">
      <div className="w-full mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-8">
          <h2 className="text-2xl lg:text-4xl font-calibri text-center sm:text-right">
            عروض محدودة لفترة قصيرة
          </h2>
          <button
            onClick={() => navigate('/offers')}
            className="mt-4 sm:mt-0 bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-brand-softBlack transition"
          >
            عرض جميع العروض
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Next */}
          <button
            onClick={scrollNext}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-brand-black text-white rounded-full p-3 shadow-lg"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Cards */}
          <div
            ref={carouselRef}
            className="
              flex gap-8 overflow-x-hidden scroll-smooth
              snap-x snap-mandatory
              px-2 lg:px-6
              scrollbar-hide
            "
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="
                  flex-none
                  w-[80%] sm:w-[45%] lg:w-[30%]
                  snap-start
                  bg-white rounded-3xl border border-gray-400
                  overflow-hidden hover:shadow-soft transition
                "
              >
                {/* Image */}
                <div className="relative h-[20rem] lg:h-[26rem] bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 left-3 bg-white p-2 rounded-full shadow"
                  >
                    <FiHeart
                      size={20}
                      className={
                        favorites[product.id]
                          ? 'text-red-500 fill-red-500'
                          : 'text-gray-600'
                      }
                    />
                  </button>

                  <span className="absolute top-3 right-3 bg-state-error text-white px-3 py-1 rounded text-sm font-bold">
                    {product.discount}%
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col">
                  <div className="flex justify-between mb-3">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <div className="text-right">
                      <p className="font-bold text-xl text-[#8B1538]">
                        {product.price} ريال
                      </p>
                      <p className="text-sm line-through text-gray-400">
                        {product.price + 50} ريال
                      </p>
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
            ))}
          </div>

          {/* Previous */}
          <button
            onClick={scrollPrev}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-brand-black text-white rounded-full p-3 shadow-lg"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
