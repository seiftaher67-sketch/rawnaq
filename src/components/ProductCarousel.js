import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart } from 'react-icons/fi';
import card1 from '../card1.jpg';
import card2 from '../card2.jpg';
import card3 from '../card3.jpg';

const ProductCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState({});
  const carouselInnerRef = useRef(null); // Ref for the inner div that will be translated
  const cardRef = useRef(null); // Ref for a single card to measure its width
  const [cardVisibleWidth, setCardVisibleWidth] = useState(0); // Width of one card + its right margin
  const [productsPerPage, setProductsPerPage] = useState(1);
  const [translateX, setTranslateX] = useState(0);

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
    {
      id: 5,
      name: 'عبابة كتان',
      code: 'JM127',
      price: 250,
      image: card3,
      discount: 25,
    },
    {
      id: 6,
      name: 'طرحة قطن',
      code: 'JM128',
      price: 250,
      image: card1,
      discount: 25,
    },
  ];

  // Calculate products per page and card width on mount and resize
  useEffect(() => {
    const calculateSizes = () => {
      if (carouselInnerRef.current && cardRef.current) {
        let newProductsPerPage;
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1024) { // lg
          newProductsPerPage = 4;
        } else if (screenWidth >= 768) { // md
          newProductsPerPage = 3;
        } else if (screenWidth >= 640) { // sm
          newProductsPerPage = 2;
        } else { // xs
          newProductsPerPage = 1;
        }
        setProductsPerPage(newProductsPerPage);

        // Calculate card width including its right margin (gap-6 is 1.5rem = 24px)
        const cardWidthPx = cardRef.current.offsetWidth;
        const gapPx = 24; // Tailwind gap-6
        setCardVisibleWidth(cardWidthPx + gapPx);
      }
    };

    calculateSizes(); // Initial calculation
    window.addEventListener('resize', calculateSizes);
    return () => window.removeEventListener('resize', calculateSizes);
  }, [products]); // Recalculate if products change

  // Update translateX when currentIndex or cardVisibleWidth changes
  useEffect(() => {
    if (cardVisibleWidth > 0) {
      setTranslateX(-currentIndex * cardVisibleWidth);
    }
  }, [currentIndex, cardVisibleWidth]);

  const toggleFavorite = (id) => {
    setFavorites({
      ...favorites,
      [id]: !favorites[id],
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <section className="py-12 bg-gray-light">
      <div className="w-full mx-auto px-4">
        {/* Header with Title and Button */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-calibri font-normal leading-none tracking-normal text-center sm:text-right flex-1 mb-4 sm:mb-0">
            عروض محدودة لفترة قصيرة
          </h2>
          <button className="bg-brand-gold text-brand-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold hover:bg-brand-black hover:text-brand-gold transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105">
            عرض جميع العروض
          </button>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center gap-6">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-brand-black text-white rounded-full p-3 hover:bg-brand-softBlack transition-colors flex-shrink-0"
            aria-label="السابق"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Product Cards Container Wrapper */}
          <div className="w-full overflow-hidden">
            <div
              ref={carouselInnerRef}
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {products.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  ref={index === 0 ? cardRef : null} // Assign ref to the first card
                  className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-soft transition-shadow flex flex-col"
                >
                  {/* Product Image Container */}
                  <div className="relative bg-gray-100 h-[20rem] sm:h-[24rem] md:h-[28rem] flex-grow overflow-hidden">
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
                      <button
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="flex-1 bg-brand-black text-white py-2 px-3 rounded-full font-semibold hover:bg-brand-softBlack transition-colors text-xs"
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

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-brand-black text-white rounded-full p-3 hover:bg-brand-softBlack transition-colors flex-shrink-0"
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