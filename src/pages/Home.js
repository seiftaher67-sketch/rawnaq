import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductCarousel from '../components/ProductCarousel';
import Testimonials from '../components/Testimonials';
import im1 from '../im1.jpeg';
import CategorySection from '../components/CategorySection';

const Home = () => {
  const navigate = useNavigate();
  const marqueeText = "شحن مجاني لجميع الطلبات داخل السعودية لفترة محدودة";

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <CategorySection />

      {/* Shipping Info Marquee */}
      <div
        className="bg-gray-700 text-white py-4 overflow-hidden"
        dir="rtl"
      >
        <div className="flex w-[200%] hover:[&>*]:[animation-play-state:paused]">

          {/* Track  */}
          <div className="flex w-1/2 animate-[marquee-rtl_25s_linear_infinite]">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`b-${i}`}
                className="whitespace-nowrap px-12 text-base"
                style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '1', letterSpacing: '0' }}
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <section className="py-16 bg-gray-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Card 1 - Left (Wider) - صورة المرأة في الصحراء */}
            <div
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 w-full h-[26rem] sm:h-[32rem] md:h-[38rem] md:w-[55%]"
            >
              <img
                src={im1}
                alt="عرض خاص 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" style={{ pointerEvents: 'none' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6" onClick={(e) => e.stopPropagation()}>
                  <p className="text-base sm:text-lg font-semibold mb-1 leading-tight italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontFamily: 'Amiri', fontWeight: 700, fontStyle: 'normal', fontSize: '32px', lineHeight: '1', letterSpacing: '0' }}>تألقى الآن بخصم خاص</p>
                  <br></br>
                  <p className="text-7xl sm:text-8xl md:text-9xl lg:text-[5.5rem] font-extrabold mb-2 italic" style={{ textShadow: '4px 4px 10px rgba(0,0,0,0.85)', fontFamily: 'Amiri', fontWeight: 700, fontStyle: 'normal', fontSize: '64px', lineHeight: '50px', letterSpacing: '0%', color: '#FFD700', leadingTrim: 'NONE' }}>30%</p>
                  <p className="text-sm sm:text-base leading-relaxed italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontFamily: 'Amiri', fontWeight: 700, fontStyle: 'normal', fontSize: '32px', lineHeight: '1', letterSpacing: '0' }}>خصومات موسمية على العبايات الفاخرة</p>

                </div>
              </div>
            </div>

            {/* Card 2 - Right (Narrower) - صورة قريبة */}
            <div
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 w-full h-[26rem] sm:h-[32rem] md:h-[38rem] md:w-[40%]"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c4121e5f8af449fab8ea450fd7ca0fa%2Fe597cd5b1c2f4efab93435c4e88e1130?format=webp&width=1200"
                alt="عرض خاص 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" style={{ pointerEvents: 'none' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6 max-w-xs sm:max-w-sm" onClick={(e) => e.stopPropagation()}>
                  <p className="text-base sm:text-lg font-semibold mb-1 leading-tight italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontFamily: 'Amiri', fontWeight: 700, fontStyle: 'normal', fontSize: '32px', lineHeight: '1', letterSpacing: '0' }}>عرض الموسم</p>
                  <br></br>
                  <p className="text-base sm:text-lg font-semibold mb-2 leading-tight italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontFamily: 'Amiri', fontWeight: 700, fontStyle: 'normal', fontSize: '32px', lineHeight: '1', letterSpacing: '0' }}>اختاري التفصيلة التي تليق بك</p>
                  <br></br>
                  <h2 className="text-xs sm:text-sm leading-relaxed italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontFamily: 'Calibri', fontWeight: 600, fontStyle: 'normal', fontSize: '16px', lineHeight: '1', letterSpacing: '0', textAlign: 'center', width: '300px', height: '44px', transform: 'rotate(0deg)', opacity: 1, color: '#f0f0f0' }}>تسوقي الآن من تشكيلتنا التي تجمع بين اللمسة</h2>
                  <h2 className="text-xs sm:text-sm leading-relaxed italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontFamily: 'Calibri', fontWeight: 600, fontStyle: 'normal', fontSize: '16px', lineHeight: '1', letterSpacing: '0', textAlign: 'center', width: '300px', height: '44px', transform: 'rotate(0deg)', opacity: 1, color: '#f0f0f0' }}>        العصرية ولاناقة الكلاسيكية </h2>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Info Marquee */}
      <div
        className="bg-gray-700 text-white py-4 overflow-hidden"
        dir="rtl"
      >
        <div className="flex w-[200%] hover:[&>*]:[animation-play-state:paused]">

          {/* Track  */}
          <div className="flex w-1/2 animate-[marquee-rtl_25s_linear_infinite]">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`b-${i}`}
                className="whitespace-nowrap px-12 text-base"
                style={{ fontFamily: 'Calibri', fontWeight: 400, fontStyle: 'normal', fontSize: '16px', lineHeight: '1', letterSpacing: '0' }}
              >
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* New Collection / Featured Products Section */}
      <ProductCarousel />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
