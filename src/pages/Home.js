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
  const marqueeTexts = [
    "شحن مجاني لجميع الطلبات داخل السعودية لفترة محدودة",
    "خصم 30% على العبايات الفاخرة",
    "عروض موسمية على الإكسسوارات"
  ];
  const spans = Array.from({ length: 100 }, (_, i) => (
    <span key={i} className="inline-block px-8 text-center font-calibri text-base font-normal leading-none tracking-normal">{marqueeTexts[i % marqueeTexts.length]}</span>
  ));

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <CategorySection />

      {/* Shipping Info Marquee */}
      <div className="bg-gray-medium text-white py-4">
        <style dangerouslySetInnerHTML={{
          __html: `
          .animate-marquee {
            animation: marquee 80s linear infinite;
            display: inline-block;
            width: max-content;
          }
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}} />
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {spans}{spans}
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Card 1 - Left (Wider) - صورة المرأة في الصحراء */}
            <div
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 w-full h-[26rem] sm:h-[32rem] md:h-[38rem] md:w-[55%]"
              onClick={() => handleCardClick(1)}
            >
              <img
                src={im1}
                alt="عرض خاص 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <p className="text-base sm:text-lg font-semibold mb-1 leading-tight italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontStyle: 'italic' }}>تألقى الآن بخصم خاص</p>
                  <p className="text-7xl sm:text-8xl md:text-9xl lg:text-[5.5rem] font-extrabold mb-2 italic" style={{ textShadow: '4px 4px 10px rgba(0,0,0,0.85)', fontStyle: 'italic', color: '#FFD700' }}>30%</p>
                  <p className="text-sm sm:text-base leading-relaxed italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontStyle: 'italic' }}>خصومات موسمية على العبايات الفاخرة</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Right (Narrower) - صورة قريبة */}
            <div
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 w-full h-[26rem] sm:h-[32rem] md:h-[38rem] md:w-[40%]"
              onClick={() => handleCardClick(2)}
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F7c4121e5f8af449fab8ea450fd7ca0fa%2Fe597cd5b1c2f4efab93435c4e88e1130?format=webp&width=1200"
                alt="عرض خاص 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-6 max-w-xs sm:max-w-sm">
                  <p className="text-base sm:text-lg font-semibold mb-1 leading-tight italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontStyle: 'italic' }}>عرض الموسم</p>
                  <p className="text-base sm:text-lg font-semibold mb-2 leading-tight italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontStyle: 'italic' }}>اختاري التفصيلة التي تليق بك</p>
                  <p className="text-xs sm:text-sm leading-relaxed italic" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.8)', fontStyle: 'italic', color: '#f0f0f0' }}>تسوقي الآن من تشكيلتنا التي تجمع بين اللمسة<br />العصرية والأناقة الكلاسيكية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Collection / Featured Products Section */}
      <ProductCarousel />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;
